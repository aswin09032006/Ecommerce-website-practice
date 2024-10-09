import React from 'react';
import './ProductCard.css';

const ProductCard = ({ label, title, description, imageUrl, price, link }) => {
    return (
        <div className="product-card-wrapper">
            <a href={link}>
                <div className="product-card-outer">
                    <div className="product-card-content">
                        <span className="product-card-bg">{label}</span>
                        <h1>{title}</h1>
                        {/* <p>{description}</p> */}
                        <p className="product-price">Rs. {price}</p>
                    </div>
                    <img src={imageUrl} alt={title} />
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
