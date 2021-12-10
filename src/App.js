import { connect } from 'react-redux';
import { selectCategory } from './store/storefront.js';

import './App.css';

import Header from './components/header/Header.js';
import Categories from './components/categories/Categories';
import Footer from './components/footer/Footer';

const mapStateToProps = (state) => ({
  categories: state.storefront.categories,
  products: state.storefront.products,
  activeCategory: state.storefront.activeCategory,
});

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category)),
});

export default connect(
  mapStateToProps,
  null
)(function App() {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
});
