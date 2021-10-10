import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { INCREASE, DECREASE, REMOVE } from "./actions";
import { reducer } from "./reducer";
import { Provider } from "react-redux";

const initialStore = {
  cart: cartItems,
  total: 500,
  amount: 7
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store = {store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  );
}

export default App;
