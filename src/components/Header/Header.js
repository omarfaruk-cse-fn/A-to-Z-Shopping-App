import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {

    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className='headerNav'>
                <img src={logo} alt="" />
                <div>
                    <Link to='/Shop'>Shop</Link>
                    <Link to="/Order">Order</Link>
                    <Link to="/Inventory">Inventory</Link>
                    <Link to="/About">About</Link>
                    {
                        user ? <Link onClick={handleSignOut} to='/Shop'>Sign Out</Link> : <Link to='/login'>Login</Link>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Header;