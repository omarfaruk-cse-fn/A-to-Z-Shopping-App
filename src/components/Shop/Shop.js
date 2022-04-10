import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts([])

    const [cart, setCart] = useState([])


    // from local storage
    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCard = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCard.push(addedProduct)
                console.log(addedProduct)
            }

        }
        setCart(savedCard)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, exist]
        }
        //  console.log(product)
        //const newCart = [...cart, selectedProduct]
        setCart(newCart)
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}>
                    <Link to='/Order'> <button>Order Review</button> </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Shop;