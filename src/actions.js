export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const GET_TYPE = "GET_TYPE";
export const OREDER = "OREDER";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";
export const GET_ITEMS = "GET_ITEMS";
export const ALERT = "ALERT";

export const FindItem = (slug) => {
  return { type: OREDER, payload: slug };
};

export const Toggle = (toggle) => {
  return { type: TOGGLE, payload: toggle };
};

export const GetItems = (id) => {
  return { type: GET_ITEMS, payload: id };
};

export const getType = (type, id) => {
  return { type: GET_TYPE, payload: { type, id } };
};
