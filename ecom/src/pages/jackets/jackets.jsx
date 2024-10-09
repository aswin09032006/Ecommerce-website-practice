import React from 'react';
import { useNavigate } from 'react-router-dom';
import coat1 from '../../assets/item1.png';
import coat2 from '../../assets/item2.png';
import coat3 from '../../assets/item3.png';
import coat4 from '../../assets/item4.png';
import ItemCard from '../../components/itemCard/itemcard';
import './jackets.css';

const Jackets = () => {
    const jackets = [
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
        },
        {
            image: coat4,
            product_name: "Leather Moto Jacket",
            price: 199.99,
            discount_price: 179.99,
        }
    ];

    const navigate = useNavigate();

    const handleCardClick = (product) => {
        navigate("/product", { state: { product } }); // Pass product directly
    }

    return (
        <div className="jackets-container">
            <h2>Jackets Collection</h2>
            <div className="item-cards">
                {jackets.map((jacket, index) => (
                    <ItemCard 
                    key={index}
                    product_name={jacket.product_name}
                    price={jacket.price}
                    discount_price={jacket.discount_price}
                    image={jacket.image}
                    onClick={() => handleCardClick(jacket)}
                />
                ))}
            </div>
        </div>
    );
};

export default Jackets;
