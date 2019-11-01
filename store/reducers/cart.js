import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  cartItems: [],
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.product;
      const indexOfProduct = state.cartItems.findIndex(
        item => item.id === product.id
      );

      let updatedTotal = state.totalAmount;

      if (indexOfProduct >= 0) {
        let updatedCart = [...state.cartItems];

        let item = updatedCart.filter(item => item.id === product.id);

        item[0].quantity = item[0].quantity + 1;
        item[0].price = item[0].price + product.price;

        updatedCart.map(el => (el.id === item.id ? item[0] : el));

        updatedTotal += product.price;
        return {
          ...state,
          cartItems: updatedCart,
          totalAmount: updatedTotal
        };
      } else {
        updatedTotal += product.price;
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              quantity: 1,
              price: product.price,
              id: product.id,
              userId: product.userId,
              name: product.name,
              imageUrl: product.imageUrl,
              description: product.description
            }
          ],
          totalAmount: updatedTotal
        };
      }
    default:
      return state;
  }
};
