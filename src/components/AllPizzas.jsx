import React, { useContext } from "react";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import PizzaItemSkeleton from "./PizzaItemSkeleton";
import { SearchContext } from "../App";

function AllPizzas({ pizzasArray, isLoading, categories }) {
  let pizzasSortArray = pizzasArray;

  const popupSortName = useSelector((state) => state.filter.popupSortName);

  const { searchValue } = useContext(SearchContext);

  if (popupSortName == "популярности") {
    pizzasSortArray = pizzasArray.sort((a, b) => b.rating - a.rating);
  } else if (popupSortName == "цене min") {
    pizzasSortArray = pizzasArray.sort((a, b) => a.price - b.price);
  } else if (popupSortName == "цене max") {
    pizzasSortArray = pizzasArray.sort((a, b) => b.price - a.price);
  }

  let pizzasFormattedArray = pizzasSortArray
    .filter((pizza) => pizza.category.includes(categories))
    .filter((pizza) =>
      pizza.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((pizza) => {
      return <PizzaItem key={pizza.index} {...pizza} />;
    });

  return (
    <div className="allPizzas">
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((id) => {
              return <PizzaItemSkeleton key={id} />;
            })
          : pizzasFormattedArray}
      </div>
    </div>
  );
}
export default AllPizzas;
