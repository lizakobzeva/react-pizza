import React, { useState } from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import AllPizzas from "./AllPizzas";

function Main({
  pizzasArray,
  isLoading,
  categoriesArray,
  categories,
  setCategories,
}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoriesArray={categoriesArray}
          categories={categories}
          setCategories={setCategories}
        />
        <Sort />
      </div>
      <AllPizzas
        categories={categories}
        pizzasArray={pizzasArray}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Main;
