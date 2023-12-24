import React, { useState } from "react";

function Categories({ categoriesArray, categories, setCategories }) {
  let cetegoriFormattedArray = categoriesArray.map((categori) => {
    return (
      <li
        key={categori.index}
        onClick={() => setCategories(categori.index)}
        className={categories == categori.index ? "active" : ""}
      >
        {categori.title}
      </li>
    );
  });
  return (
    <div className="categories">
      <ul>{cetegoriFormattedArray}</ul>
    </div>
  );
}
export default Categories;
