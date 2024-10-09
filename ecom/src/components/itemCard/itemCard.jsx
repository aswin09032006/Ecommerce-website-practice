import React from 'react';
import './itemCard.css';

const ItemCard = ({ product_name, price, discount_price, image, onClick }) => {

    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={product_name} className="product-image" />
            <h4>{product_name}</h4>
            <div className="price-container">
                <span className="price">${price}</span>
                <span className="discount-price">${discount_price}</span>
            </div>
        </div>
    );
};

export default ItemCard;
