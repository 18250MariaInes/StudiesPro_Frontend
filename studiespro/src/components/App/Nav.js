import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import './styles.css';
import TokenRefresh from '../TokenRefresh';

const Nav = ({
    isAuthenticated = false,
    authName = '',
    onClick
})=> (
    <div className="navbar">
        <Link to='/Home'>
            <img 
            src="https://pngimage.net/wp-content/uploads/2018/06/white-home-icon-png-4.png"
            alt="Home" className="foto-nav"
            />
        </Link>
        
    { isAuthenticated? (
        <ul className="nav-links">
            <Link className="nav-link" to='/Teachers'>
                <h1 className="home-title">Teachers</h1>
            </Link>
            <Link className="nav-link" to='/Books'>
                <h1 className="home-title">Books</h1>
            </Link>
            <Link className="nav-link" to='/Delvas'>
                <h1 className="home-title">Delvas</h1>
            </Link>
            <Link className="nav-link" to='/Providers'>
                <h1 className="home-title">Providers</h1>
            </Link>
            <Link className="nav-link" to='/Materials'>
                <h1 className="home-title">Materials</h1>
            </Link>
            <Link className="nav-link" to='/Sshipevents'>
                <h1 className="home-title">Events</h1>
            </Link>
            <Link className="nav-link" to='/' onClick={onClick}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAA6klEQVRIid2WPW4CMRCFv0UIJMLfBbhKWgqanIAbwKUQBUcACRpSc4hcIuVHkSVawS7YsItYnmS5mPF7nvF4bNSdj2FPABLVEMerJEmS3PJpxjifI2aTjVjye/F+Qs3bLsWIOdf6pk49qPM8g2XcpQzfb0q5VNvPEFLdqB+Q6QzXDlb9Aj6BATA8m1tAD+gA7ZzlW2ASKvQDjO4I8IRVaDFEt6cLgsCIpsAY6KZjAPT5S1s/3ciwYPkWmFRdDOtTMVQptFBbWUPZQgd1lmcoVagI9eh1MdmoR0QvKfT/wlZdeQ3g+0GOoA/kEb2Q9E4iEItTAAAAAElFTkSuQmCC"
                alt="out" className="logout-icon"
                />
            </Link>
            <TokenRefresh reviewTime={3600000} />
        </ul>
    ) : (<></>)
    }
    </div>
)

export default connect(
    state => ({
        isAuthenticated: selectors.isAuthenticated(state),
        authName: selectors.getAuthName(state),
    }),
    dispatch => ({
        onClick() {
          dispatch(actions.logout());
        },
      })
)(Nav);