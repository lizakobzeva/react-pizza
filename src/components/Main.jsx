import React, { useState } from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import AllPizzas from "./AllPizzas";

function Main() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <AllPizzas />
    </div>
  );
}

export default Main;
