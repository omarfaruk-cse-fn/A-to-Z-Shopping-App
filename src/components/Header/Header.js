import React from 'react';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <div>
            <nav className='headerNav'>
                <img src={logo} alt="" />
                <div>
                    <a href="/About">About</a>
                    <a href="/Order">Order</a>
                    <a href="/OrderReview">Order Review</a>
                    <a href="/ManageInventory">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;