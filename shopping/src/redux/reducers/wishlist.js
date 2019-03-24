const wishlistReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_WISHLIST":
      {
          return [ ...state,action.payload ]
      }
      default:
        return state
  
    }
  }
  
  export default wishlistReducer;