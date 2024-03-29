import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPizzaInCartArray } from "../Redux/Slises/cartSlice";

function PizzaItem({ title, price, doughwidth, diameter, img, index }) {
  let [doughwidthActive, setDoughwidthActive] = useState(0);
  let [diameterActive, setDiameterActive] = useState(0);
  let [quantityPizzasInCart, setQuantityPizzasInCart] = useState(0);
  const dispatch = useDispatch();

  const { pizzasInCartArray } = useSelector((state) => state.cart);
  const AddPizzas = () => {
    let pizzaInCartArray = {
      index: index,
      title: title,
      img: img,
      diameter: diameter[diameterActive],
      doughwidth: doughwidth[doughwidthActive],
      count: 1,
      price:
        Math.floor(price * (1 + diameterActive / 5)) + doughwidthActive * 10,
    };
    setQuantityPizzasInCart(quantityPizzasInCart + 1);
    dispatch(AddPizzaInCartArray(pizzaInCartArray));
  };

  let countThisTipePizzaFunction = () => {
    let countThisTipePizza = 0;
    pizzasInCartArray.forEach((pizza) => {
      if (pizza.index == index) {
        countThisTipePizza += pizza.count;
      }
    });
    return countThisTipePizza;
  };

  let doughwidthArray = doughwidth.map((active) => {
    return (
      <li
        key={doughwidth.indexOf(active)}
        onClick={() => setDoughwidthActive(doughwidth.indexOf(active))}
        className={
          doughwidthActive == doughwidth.indexOf(active) ? "active" : ""
        }
      >
        {active}
      </li>
    );
  });

  let diameterArray = diameter.map((active) => {
    return (
      <li
        key={diameter.indexOf(active)}
        onClick={() => setDiameterActive(diameter.indexOf(active))}
        className={diameterActive == diameter.indexOf(active) ? "active" : ""}
      >
        {active}
      </li>
    );
  });
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={img} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>{doughwidthArray}</ul>
        <ul>{diameterArray}</ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          от{" "}
          {Math.floor(price * (1 + diameterActive / 5)) + doughwidthActive * 10}{" "}
          ₽
        </div>
        <div onClick={AddPizzas} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countThisTipePizzaFunction() != 0 ? (
            <i>{countThisTipePizzaFunction()}</i>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default PizzaItem;
