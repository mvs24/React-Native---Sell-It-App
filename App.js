import React from 'react';
import { createStore, combineReducers } from 'redux';
import  { Provider }  from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ProductsNavigator from './navigation/ProductsNavigator';
import ProductsReducer from './store/reducers/products';
import CartReducer from './store/reducers/cart'

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default () => {
  return (
    <Provider store={store}>
        <ProductsNavigator/>
    </Provider>
  );
}