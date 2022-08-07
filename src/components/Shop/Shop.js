import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);   
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const chooseRandom = ()=>{
        const cartRoom = cart[Math.floor(Math.random()*cart.length)];
        const randomItem = [...choose, cartRoom];
        setChoose(randomItem);
    }

    const resetAll = ()=>{
        setChoose([]);
    }

    return (
        <div className='shopContainer'>
            <div className="productsContainer">
                {
                      products.map(product => <Product 
                      key={product.id}
                      product={product}
                      name={product.name}
                      handleAddToCart={handleAddToCart}
                      ></Product>) 
                }
            </div>
            <div className="cartContainer">
                <div>
                    <h4>Random Selected Item</h4>
                    <div>
                    {choose.map((item)=> (
                        <p>{item}</p>
                    ))}
                    </div>

                    <button onClick={chooseRandom}> 
                        <p>Choose Random</p>
                    </button>   
                    <button onClick={resetAll}>
                        <p>Reset</p>
                    </button>
                </div>
                

                <div>
                    <h4>Selected Items</h4>
                    <div className='selectedItems'>{cart.map((item) => (
                    <p>{item}</p>
                    ))}</div>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;