import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";
import PizzaItemSkeleton from "./PizzaItemSkeleton";

function AllPizzas() {
  const { popupSortName, searchValue, categories } = useSelector(
    (state) => state.filter
  );
  const { pizzasArray, status } = useSelector((state) => state.pizzas);

  let pizzasSortArray = [...pizzasArray];

  if (popupSortName == "популярности") {
    pizzasSortArray = pizzasSortArray.sort((a, b) => b.rating - a.rating);
  } else if (popupSortName == "цене min") {
    pizzasSortArray = pizzasSortArray.sort((a, b) => a.price - b.price);
  } else if (popupSortName == "цене max") {
    pizzasSortArray = pizzasSortArray.sort((a, b) => b.price - a.price);
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
      {status == "error" ? (
        <div className="container--cart container">
          <div class="cart cart--empty">
            <h2>
              Что-то пошло не так<icon>😕</icon>
            </h2>
            <p>Серверу нехорошо, попробуйте позднее</p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status == "loading"
              ? [...new Array(8)].map((id) => {
                  return <PizzaItemSkeleton key={id} />;
                })
              : pizzasFormattedArray}
          </div>
        </>
      )}
    </div>
  );
}
export default AllPizzas;
