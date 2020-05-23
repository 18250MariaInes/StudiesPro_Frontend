import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '../../store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routerActions } from 'react-router-redux';
import LoginForm from '../LoginForm';
import Nav from './Nav';
import Home from './Home';
import AddTeacherForm from '../AddTeacherForm';
import { 
  connectedRouterRedirect,
  connectedReduxRedirect,
} from 'redux-auth-wrapper/history4/redirect';
import * as selectors from '../../reducers';
import LogoutButton from '../LogoutButton';
import TeachersView from './TeachersView';
import AddTeacherView from './AddTeacherView';



const { store, persistor } = configureStore();
const UserIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: selectors.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'userIsAuthenticated',
});
const routes = [
  {
      path: '/',
      exact: true,
      component: LoginForm,
  },
  {
      path: '/Teachers',
      exact: true,
      component: UserIsAuthenticated(TeachersView),
  },
  {
    path: '/Home',
    exact: true,
    component: UserIsAuthenticated(Home),
  },
  {
    path: '/Add-teacher',
    exact: true,
    component: UserIsAuthenticated(AddTeacherView),
  },
];
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        {
            routes.map( route => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
        }
        </Switch>   
        <LogoutButton/>  
      </div>
    </Router>
    </PersistGate>
  </Provider>
);


export default App;

