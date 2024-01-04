import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import CartEmpty from "./CartEmpty";

function CartState() {
  const { pizzasInCartArray } = useSelector((state) => state.cart);
  return <>{pizzasInCartArray.length == 0 ? <CartEmpty /> : <Cart />}</>;
}
export default CartState;
