import { connect } from 'react-redux';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
  addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
  // getAllProducts: () => dispatch(getProducts),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Products(props) {
  // useEffect(() => {
  //   props.getAllProducts();
  // }, []);

  return <></>;
});
