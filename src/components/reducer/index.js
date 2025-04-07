// reducers/index.js
import { combineReducers } from 'redux';
import wishlistReducer from '../Wishlist/action/Wishlistaction';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  // Add other reducers as needed
});

export default rootReducer;
