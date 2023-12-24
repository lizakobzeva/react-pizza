import React, { useState } from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import AllPizzas from "./AllPizzas";

function Main({ pizzasArray, isLoading }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <AllPizzas pizzasArray={pizzasArray} isLoading={isLoading} />
    </div>
  );
}

export default Main;
