import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";
import pinzaData from "./data";

const featuredData = pinzaData.filter((item) => item.fields.featured === true);
const initialStore = {
  data: pinzaData,
  cartItem: [],
  featuredData: featuredData,
};

function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cartItem: [] };
  }
  return state;
}
export default reducer;
