import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTAL,
  TOGGLE_AMOUNT,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
      break;

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            } else {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        }),
      };
      break;

    case INCREASE:
      // let tempCart = state.cart.map((item) => {
      //   if (item.id === action.payload.id) {
      //     return { ...item, amount: item.amount + 1 };
      //   } else {
      //     return item;
      //   }
      // });
      // return { ...state, cart: tempCart };
      break;
    case DECREASE:
      // let tempCartt = [];
      // tempCartt = state.cart.map((item) => {
      //   if (item.id === action.payload.id) {
      //     return { ...item, amount: item.amount - 1 };
      //   } else {
      //     return item;
      //   }
      // });
      // return { ...state, cart: tempCartt };
      break;
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      break;
    case GET_TOTAL:
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const totalPrice = amount * price;
          cartTotal.amount += amount;
          cartTotal.total += parseFloat(totalPrice.toFixed(2));
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, amount, total };
      break;
    default:
      return state;
  }
  return state;
};
