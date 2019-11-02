export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const addProductToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  };
};

export const increaseItemQuantity = id => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    itemId: id
  };
};

export const decreaseItemQuantity = id => {
  return {
    type: DECREASE_ITEM_QUANTITY,
    itemId: id
  };
};

export const removeItemFromCart = id => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    itemId: id
  }
}
