import { createStore, combineReducers } from 'redux';

import productReducer from "./reducers/products-reducer"
import wishlistReducer from "./reducers/wishlist"
import cartReducer from "./reducers/cart-reducer"


const allReducers = combineReducers({ productReducer,wishlistReducer,cartReducer })

let store = createStore(allReducers);

window.store = store

export default store;