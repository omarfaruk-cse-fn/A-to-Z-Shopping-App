import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Selected item : {cart.length}</h5>
            <p>Total Price: </p>
            <p>Shipping Charge: </p>
            <p>Tax: </p>
            <h5>Grand Total: </h5>
        </div>
    );
};

export default Cart;