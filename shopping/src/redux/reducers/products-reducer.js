const productReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
      {
console.log(action.payload);
        return action.payload
      }
      case "ADD_PRODUCT":
        return [ ...state,action.payload ]
      default:
        return state
  
    }
  }
  
  export default productReducer;