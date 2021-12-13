import { connect } from 'react-redux';
import './categories.scss';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Categories(props) {
  return <></>;
});
