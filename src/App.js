import Header from "./components/Header";
import "./scss/app.scss";
import Main from "./components/Main";
import CartEmpty from "./components/CartEmpty";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { React, useEffect, useState, createContext } from "react";
import { store } from "./Redux/store";

export const SearchContext = createContext();

function App() {
  const PopupArray = ["популярности", "цене min", "цене max"];
  const categoriesArray = [
    {
      index: 0,
      title: "Все",
    },
    {
      index: 1,
      title: "Мясные",
    },
    {
      index: 2,
      title: "Вегетарианские",
    },
    {
      index: 3,
      title: "Гриль",
    },
    {
      index: 4,
      title: "Острые",
    },
  ];

  const [pizzasArray, setPizzasArray] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/pizza", { method: "get" })
      .then((res) => res.json())
      .then((json) => {
        setPizzasArray(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoading={isLoading}
                    pizzasArray={pizzasArray}
                    categoriesArray={categoriesArray}
                    categories={categories}
                    setCategories={setCategories}
                    PopupArray={PopupArray}
                  />
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/emptycart" element={<CartEmpty />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
