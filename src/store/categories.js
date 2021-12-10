const initialState = {
  categories: [],
  activeCategory: '',
};

export default function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_ACTIVE_CATEGORY':
      if (state.categories.includes(payload)) {
        return { ...state, activeCategory: payload.displayName };
      } else {
        return state;
      }

    default:
      return state;
  }
}

export const selectCategory = (categoryName) => {
  return {
    type: 'SELECT_ACTIVE_CATEGORY',
    payload: categoryName,
  };
};
