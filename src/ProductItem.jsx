import React from "react";
import "./ProductItem.css";

function ProductItem({ product }) {
    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductItem;
