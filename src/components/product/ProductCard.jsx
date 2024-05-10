import React from "react";
import "./productCard.scss";

const ProductCards = ({ product }) => {
    const { img, info, name, price, rating, category } = product;
    // console.log(product);
    return (
        <div className="product__card">
            <div className="product__card__img">
                <img src={img} alt="" />
            </div>
            <div className="product__card__info">
                <h3 className="product__title">{name}</h3>
                <p className="product__info">{info}</p>
                <p className="product__price">{price}</p>
                <p className="product__category">{category}</p>
                <p className="product__rating">{rating}</p>
                <button className="product__btn">Add</button>
            </div>
        </div>
    );
};

export default ProductCards;
