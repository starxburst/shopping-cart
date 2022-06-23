import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style/ProductCard.css'

function ProductCard(props) {

    const { items } = props;
    return (
        items.map(item => {
            return (
                <Link to={`/shop/${item.id}`} className="link">
                    <div className="product-card-container" key={item.id}>
                        <div className="image-container">
                            <img className="product-image" src={item.image} alt={item.title}/>
                        </div>
                        <div>
                            <h1 className="title-container">{item.title}</h1>
                            <h2 className="price-container">{item.price} USD</h2>
                        </div>
                    </div>                    
                </Link>

            )
        })
    )
}

export default ProductCard;
