import React from 'react';
import { useNavigate } from 'react-router-dom';
import coat1 from '../../assets/item1.png';
import coat2 from '../../assets/item2.png';
import coat3 from '../../assets/item3.png';
import coat5 from '../../assets/item5.png';
import ItemCard from '../../components/itemCard/itemcard';
import './coats.css';

const Coats = () => {
    const coats = [
        {
            image: coat5,
            product_name: "Oversized Puffer Jacket",
            price: 139.99,
            discount_price: 119.99,
        },
        {
            image: coat1,
            product_name: "Classic Trench Coat",
            price: 120.99,
            discount_price: 99.99,
        },
        {
            image: coat2,
            product_name: "Wool Blend Coat",
            price: 150.99,
            discount_price: 129.99,
        },
        {
            image: coat3,
            product_name: "Faux Fur Lined Jacket",
            price: 89.99,
            discount_price: 79.99,
        }
    ];

    const navigate = useNavigate();

    const handleCardClick = (product) => {
        navigate("/product", { state: { product } });
    }

    return (
        <div className="coats-container">
            <h2>Coats Collection</h2>
            <div className="item-cards">
                {coats.map((coat, index) => (
                    <ItemCard 
                    key={index}
                    product_name={coat.product_name}
                    price={coat.price}
                    discount_price={coat.discount_price}
                    image={coat.image}
                    onClick={() => handleCardClick(coat)}
                />
                ))}
            </div>
        </div>
    );
};

export default Coats;
