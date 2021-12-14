import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalItems: state.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
  removeFromCart: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  return <></>;
});
