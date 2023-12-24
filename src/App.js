import Header from "./components/Header";
import "./scss/app.scss";
import Main from "./components/Main";
import CartEmpty from "./components/CartEmpty";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { React, useEffect, useState, createContext } from "react";

export const SearchContext = createContext();

function App() {
  const PopupArray = ["популярности", "цене min", "цене max"];

  const [pizzasArray, setPizzasArray] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoading={isLoading}
                  pizzasArray={pizzasArray}
                  PopupArray={PopupArray}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/emptycart" element={<CartEmpty />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
