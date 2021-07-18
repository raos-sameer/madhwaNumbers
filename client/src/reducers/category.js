const categoryDetail = {
  categories: {},
  details: {},
};

const categryReducer = (state = categoryDetail, action) => {
  if (action.type === "LOGGED_IN_USER") {
    return {
      ...state,
      loggedInUser: action.payload,
    };
  }
  if (action.type === "CATEGORY_LIST") {
    return {
      ...state,
      categories: action.payload,
    };
  }
  return state;
};

export default categryReducer;
