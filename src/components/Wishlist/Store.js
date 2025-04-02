// store.js
import { createStore, combineReducers } from 'redux';
import wishlistReducer from './Wishlist/action/Wishlistaction'; // Update the path accordingly

// Add more reducers if needed
const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer);

export default store;
