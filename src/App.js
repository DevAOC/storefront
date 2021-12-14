import { connect } from 'react-redux';
import { selectCategory } from './store/storefront.js';

import './App.css';

import Header from './components/header/Header.js';
import Categories from './components/categories/Categories';
import Products from './components/products/Products.js';
import Footer from './components/footer/Footer';

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
  activeCategory: state.activeCategory,
});

export default connect(
  mapStateToProps,
  null
)(function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
});
