import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}
                    // handleAddToCart={handleAddToCart}
                    ></ReviewItem>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}> Proceed Shipping</button>
                </Cart>
            </div>
        </div >
    );
};

export default Order;