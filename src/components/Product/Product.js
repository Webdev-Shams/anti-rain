import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, name, price, img} = props.product;

    return (
        <div className='product'>
            <img src={img}></img>
            <div className='productInfo'>
                <p className='productName'>{name}</p>
                <p className='productPrice'>Price: ${price}</p>
            </div>
            <button onClick={()=>{props.handleAddToCart(props.product)}} className='btnCart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon className='cartIcon' icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Product;