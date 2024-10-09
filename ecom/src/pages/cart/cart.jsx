import React from 'react';
import './cart.css';

const Cart = ({ cartItems, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity, onCheckout }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="cart-item-list">
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h2>{item.title}</h2>
                                    <p>Price: Rs. {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => onDecreaseQuantity(item.id)} className="decrease-button">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onIncreaseQuantity(item.id)} className="increase-button">+</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h2>Total: Rs. {totalPrice}</h2>
                        <button onClick={onCheckout} className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
