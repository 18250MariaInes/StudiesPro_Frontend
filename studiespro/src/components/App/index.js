import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '../../store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from '../LoginForm';
import Nav from './Nav';
import Home from './Home';


const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/loginForm" component={LoginForm}/>
        </Switch>     
      </div>
    </Router>
    </PersistGate>
  </Provider>
);


export default App;

