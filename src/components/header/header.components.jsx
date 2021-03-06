import React from 'react';

import {Link} from 'react-router-dom';
 import {ReactComponent as Logo} from '../../assets/crown.svg' 
import { auth } from '../../assets/firebase/firebase.utils';
import {connect} from 'react-redux'

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className = "header">   
        <Link className = "logo-container" to='/'>
            <Logo className = "logo"/>
        </Link>  
        <div className = "options">
            <Link className = "option" to="/shop">
                SHOP
            </Link>
            <Link className = "option" to="">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className = "option" onClick = {() => auth.signOut()}>Sign Out</div>
                : <Link className = "option" to = "/sign-in">Sign In</Link>
            }
        </div>
    </div>
)

const mapStatesToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatesToProps)(Header);
