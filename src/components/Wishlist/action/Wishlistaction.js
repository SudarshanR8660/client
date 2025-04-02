// actions/wishlistActions.js
export const addToWishlist = (productId, productName) => ({
    type: 'ADD_TO_WISHLIST',
    payload: { id: productId, name: productName },
  });
  
  // reducers/wishlistReducer.js
  const initialState = {
    items: [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return { items: [...state.items, action.payload] };
      // Handle other actions if needed
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  