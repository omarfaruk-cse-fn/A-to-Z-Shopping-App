import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProtucts] = useState([])

    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProtucts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;