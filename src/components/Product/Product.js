import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    //const { product, handleAddToCart } = props
    //const { img, name, price, seller, ratings } = props.product
    const { img, name, price, seller, ratings } = product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;