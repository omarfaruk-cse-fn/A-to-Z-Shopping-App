import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    // console.log(cart)
    let total = 0
    let quantity = 0
    let shipping = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    let tax = parseFloat((total * .1).toFixed(2))
    let grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Selected item : {quantity}</h5>
            <p>Total Price: ${total}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            {props.children}
        </div>
    );
};

export default Cart;