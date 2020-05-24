import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import * as selectors from '../../reducers';
import './styles.css';

const Nav = ({
    isAuthenticated = false,
    authName = ''
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
            <Link className="nav-link" to='/Sshipevents'>
                <h1 className="home-title">Events</h1>
            </Link>
        </ul>
    ) : (<></>)
    }
    </div>
)

export default connect(
    state => ({
        isAuthenticated: selectors.isAuthenticated(state),
        authName: selectors.getAuthName(state),
    })
)(Nav);