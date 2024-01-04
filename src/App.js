import Header from "./components/Header";
import "./scss/app.scss";
import Main from "./components/Main";
import CartState from "./components/CartState";
import { Route, Routes } from "react-router-dom";
import { React, useEffect, createContext } from "react";
import { useDispatch } from "react-redux";
import { ChangeIsLoading, ChangePizzasArray } from "./Redux/Slises/pizzasSlice";

export const SearchContext = createContext();

function App() {
  const dispatch = useDispatch();
  // const PopupArray = ["популярности", "цене min", "цене max"];

  // const [pizzasArray, setPizzasArray] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(ChangeIsLoading(true));
    fetch("http://localhost:3001/pizza", { method: "get" })
      .then((res) => res.json())
      .then((json) => {
        dispatch(ChangePizzasArray(json));
        dispatch(ChangeIsLoading(false));
      });
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
