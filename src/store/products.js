const initialState = {
  products: [],
  filteredProducts: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      if (action.payload !== 'All') {
        const filteredProducts = state.products.filter((product) => product.category === action.payload);
        return { ...state, filteredProducts };
      }
      return { ...state, filteredProducts: state.products };
    case 'ADD_TO_CART':
      return {
        ...state,
        products: state.products.map((product) => {
          if (product === action.payload) {
            --product.count;
          }
          return product;
        }),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: state.products.map((product) => {
          if (product === action.payload) {
            ++product.count;
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
