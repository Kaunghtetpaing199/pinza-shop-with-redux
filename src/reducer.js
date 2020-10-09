import {
  DELETE,
  GET_ITEMS,
  GET_TYPE,
  OREDER,
  TOGGLE,
  GET_TOTALS,
  CLEAR_CART,
  ALERT,
} from "./actions";
import pinzaData from "./data";

const featuredData = pinzaData.filter((item) => item.fields.featured === true);
const initialStore = {
  data: pinzaData,
  cartItem: [],
  orderItem: [],
  addToCard: [],
  featuredData: featuredData,
  menu: pinzaData.filter((item) => item.fields.type === "pinza"),
  isClosed: false,
  total: 0,
  amount: 0,
  isCarted: false,
};

function reducer(state = initialStore, action) {
  if (action.type === OREDER) {
    const item = state.data.filter(
      (item) => item.fields.name === action.payload
    );
    return { ...state, cartItem: item };
  }
  if (action.type === ALERT) {
    return { ...state, isCarted: false };
  }
  if (action.type === TOGGLE) {
    if (action.payload === "All") {
      const menu = pinzaData.filter((item) => item.fields.type === "pinza");
      return { ...state, menu: menu };
    } else {
      const item = state.data.filter(
        (item) => item.fields.category === action.payload
      );
      return { ...state, menu: item };
    }
  }
  if (action.type === DELETE) {
    return { ...state, isClosed: !state.isClosed };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, addToCard: [], isClosed: !state.isClosed };
  }
  if (action.type === GET_TYPE) {
    if (action.payload.type === "remove") {
      const addToCard = state.addToCard.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, addToCard };
    } else {
      const addToCard = state.addToCard.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.type === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      });
      return { ...state, addToCard };
    }
  }
  if (action.type === GET_ITEMS) {
    const item = state.data
      .map((item) => item.fields)
      .find((item) => item.id === action.payload);
    const inCart = state.addToCard.find((cart) => cart.id === item.id);
    if (inCart) {
      return { ...state, isCarted: true };
    }
    return {
      ...state,
      addToCard: [...state.addToCard, item],
      isClosed: !state.isClosed,
    };
  }

  if ((action.type = GET_TOTALS)) {
    const [item] = state.addToCard.reduce(
      (cartTotals, cartItem) => {
        const { pirce, amount } = cartItem;
        const itemTotal = pirce * amount;
        cartTotals[0].total += itemTotal;
        cartTotals[0].amount += amount;
        return cartTotals;
      },
      [
        {
          total: 0,
          amount: 0,
        },
      ]
    );
    let { total, amount } = item;
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
}
export default reducer;
