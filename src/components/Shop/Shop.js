import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);   
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shopContainer'>
            <div className="productsContainer">
                {
                      products.map(product => <Product 
                      key={product.id}
                      product={product}
                      handleAddToCart={handleAddToCart}
                      ></Product>) 
                }
            </div>
            <div className="cartContainer">
                <h4>This is Cart section</h4>
                <p>{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;