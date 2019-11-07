import {
  ADD_TO_CART,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  ORDER_ITEMS
} from "../actions/cart";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  orders: [],
  totalOrder: 0
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
        updatedTotal = Math.ceil(updatedTotal * 100) / 100;

        return {
          ...state,
          cartItems: updatedCart,
          totalAmount: updatedTotal
        };
      } else {
        updatedTotal += product.price;
        updatedTotal = Math.ceil(updatedTotal * 100) / 100;

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
    case DECREASE_ITEM_QUANTITY:
      let updatedTotalAmount = state.totalAmount;
      let updatedCartItems = [...state.cartItems];
      const itemId = action.itemId;
      let item = state.cartItems.find(el => el.id === itemId);
      const priceToRemove = item.price / item.quantity;

      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
        item.price = item.price - priceToRemove.toFixed(2);

        updatedCartItems.map(el => {
          if (el.id === itemId) {
            return item;
          } else {
            return el;
          }
        });
        updatedTotalAmount = updatedTotalAmount - priceToRemove;
        updatedTotalAmount = Math.ceil(updatedTotalAmount * 100) / 100;

        return {
          ...state,
          cartItems: updatedCartItems,
          totalAmount: updatedTotalAmount
        };
      } else {
        let updatedCartItems = [...state.cartItems];
        updatedCartItems = updatedCartItems.filter(el => el.id !== itemId);
        updatedTotalAmount = updatedTotalAmount - priceToRemove;
        updatedTotalAmount = Math.ceil(updatedTotalAmount * 100) / 100;

        return {
          ...state,
          cartItems: updatedCartItems,
          totalAmount: updatedTotalAmount
        };
      }
    case INCREASE_ITEM_QUANTITY:
      let updatedAmount = state.totalAmount;
      let updatedCart = [...state.cartItems];
      const id = action.itemId;
      let choosenItem = updatedCart.find(el => el.id === id);
      const priceToAdd = choosenItem.price / choosenItem.quantity;

      choosenItem.quantity = choosenItem.quantity + 1;
      choosenItem.price = choosenItem.price + priceToAdd;

      updatedCart.map(el => {
        if (el.id === id) {
          return choosenItem;
        } else {
          return el;
        }
      });
      updatedAmount += priceToAdd;
      updatedAmount = Math.ceil(updatedAmount * 100) / 100;

      return {
        ...state,
        cartItems: updatedCart,
        totalAmount: updatedAmount
      };
    case REMOVE_ITEM_FROM_CART:
      let updatedCartToRemove = [...state.cartItems];
      const itemToRemove = updatedCartToRemove.filter(
        el => el.id === action.itemId
      )[0];
      const itemToRemovePrice = itemToRemove.price;
      let amount = state.totalAmount;
      amount = amount - itemToRemovePrice;
      amount = Math.ceil(amount * 100) / 100;
      updatedCartToRemove = updatedCartToRemove.filter(
        el => el.id !== action.itemId
      );

      return {
        ...state,
        cartItems: updatedCartToRemove,
        totalAmount: amount
      };
    case ORDER_ITEMS:
      // let itemsToOrder = action.items;
      // let updatedOrder = [...state.orders];

      // if (updatedOrder.length === 0) {
      //   itemsToOrder.forEach(item => {
      //     updatedOrder.unshift(item);
      //   });
      // } else {
      //   itemsToOrder.forEach((item, i) => {
      //     updatedOrder.forEach((updatedItem, index) => {
      //       if (item.id === updatedItem.id) {
      //         updatedOrder[index] = {
      //           description: item.description,
      //           id: item.id,
      //           imageUrl: item.imageUrl,
      //           name: item.name,
      //           userId: item.userId,
      //           quantity: updatedItem.quantity + item.quantity,
      //           price: item.price * item.quantity + updatedItem.price
      //         };
      //       } 
      //     });
      //   });
      
      //   itemsToOrder.forEach((item, i) => {
      //     updatedOrder.forEach((updatedItem, index) => {
      //       if (item.id !== updatedItem.id) {
      //         updatedOrder.unshift(item);
      //       }
      //     })
      //   })
      // }

      // for (let i = 0; i < updatedOrder.length; i++) {
      //   for (let j = i + 1; j < updatedOrder.length; j++) {
      //     if (updatedOrder[i].id === updatedOrder[j].id) {
      //       updatedOrder.splice(i, 1);
      //     }
      //   }
      // }
      let updatedOrder = state.cartItems;
      updatedOrder.date = Date.now();
      let updatedTotalOrder = state.totalAmount + state.totalOrder; 

      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
        orders: updatedOrder,
        totalOrder: updatedTotalOrder
      };

    default:
      return state;
  }
};
