import React from "react";
import '../../css/home/home.css';

function Cards({ image, title, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Cards;

