import Header from "./components/Header";
import "./scss/app.scss";
import Main from "./components/Main";
import CartState from "./components/CartState";
import { Route, Routes, json } from "react-router-dom";
import { React, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeIsLoading,
  ChangePizzasArray,
  fetchPizzas,
} from "./Redux/Slises/pizzasSlice";

export const SearchContext = createContext();

function App() {
  const dispatch = useDispatch();
  const { pizzasArray, status } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<CartState />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
