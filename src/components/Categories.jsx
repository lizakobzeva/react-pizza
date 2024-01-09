import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCategories } from "../Redux/Slises/filterSlice";

function Categories({}) {
  const { categoriesArray, categories } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let cetegoriFormattedArray = categoriesArray.map((categori) => {
    return (
      <li
        key={categori.index}
        onClick={() => dispatch(ChangeCategories(categori.index))}
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
