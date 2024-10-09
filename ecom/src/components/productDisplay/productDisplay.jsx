import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import './productDisplay.css';

const ProductDisplay = ({ addToCart }) => {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return <p>Product not found!</p>;
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-container">
            <div className="product-images-wrapper">
                {Array.isArray(product.image) ? (
                    product.image.map((img, index) => (
                        <img key={index} className="product-image" src={img} alt={`${product.title} ${index + 1}`} />
                    ))
                ) : (
                    <img className="product-image" src={product.image} alt={product.title} />
                )}
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.product_name}</h1>
                <p className="product-price">Rs. {product.price}</p>
                <p className="product-shipping">Tax included. Shipping calculated at checkout.</p>
                <div className="product-info-buttons">
                    <button onClick={handleAddToCart} className="product-add-to-cart">Add to cart</button>
                    <a href="/cart">
                        <button className="product-buy-now">Go to cart</button>
                    </a>
                </div>
                <div className="product-policy">
                    <div className="policy-items">
                        <p className="policy-item">
                            <strong><GiReturnArrow /></strong>Return Policy
                        </p>
                        <p className="policy-item">
                            <strong><MdOutlineCardGiftcard /></strong>Warranty
                        </p>
                        <p className="policy-item">
                            <strong><CiDeliveryTruck /></strong>Shipping
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
