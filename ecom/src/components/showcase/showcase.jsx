import React from 'react';
import demo1 from '../../assets/demo1.png';
import demo2 from '../../assets/demo2.png';
import ProductCard from '../productCard/ProductCard';
import './showcase.css';

const Showcase = () => {
    const products = [
        {
            image: demo1,
            name: 'Jackets',
            price: '124.3',
            description: 'A sophisticated fashion statement inspired by the British Vogue aesthetic.',
            link: '/jackets'
        },
        {
            image: demo2,
            name: 'Coats',
            price: '99.99',
            description: 'A minimalistic dress perfect for a modern and sleek look.',
            link: '/coats'
        },
    ];

    return (
        <div className='showcase'>
            {products.map((product, index) => (
                <div className={`showcase-container showcase-container${index + 1}`} key={index}>
                    <ProductCard
                        label="NEW"
                        title={product.name}
                        description={product.description}
                        imageUrl={product.image}
                        price={product.price}
                        link={product.link}
                    />
                </div>
            ))}
        </div>
    );
}

export default Showcase;
