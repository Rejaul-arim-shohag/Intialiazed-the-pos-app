import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import Button from "./Button";

const Card = ({ id, img, title, star, reviews, prevPrice, newPrice, cart, setCart }) => {
  const isInCart = cart.some((item) => item.id === id);
  const handleAddToCart = () => {
    const product = { id, img, title, star, reviews, prevPrice, newPrice, quantity: 1 };
    if (!isInCart) {
      setCart([...cart, product]);
    }
  };

  return (
    <section className="card">
      <img src={img} alt={title} className="card-img h-28" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
      <Button onClickHandler={handleAddToCart} value="Nike" title={isInCart ? "Added" : "Add To Cart"} disable={isInCart ? true : false} />
    </section>
  );
};

export default Card;
