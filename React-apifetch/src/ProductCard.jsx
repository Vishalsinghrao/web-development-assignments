
import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{`$${product.price}`}</p>
            <p>{product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}</p>
        </div>
    );
};

export default ProductCard;
