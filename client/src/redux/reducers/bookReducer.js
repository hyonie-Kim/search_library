let initialState = {
  itemList: {},
  itemNewSpecial: {},
  bestSeller: {},
  loading: true,
};

function bookReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_BOOKS_REQUEST":
      return { ...state, loading: true };
    case "GET_BOOKS_SUCCESS":
      return {
        ...state,
        itemList: payload.itemList,
        itemNewSpecial: payload.itemNewSpecial,
        bestSeller: payload.bestSeller,
        loading: false,
      };
    case "GET_BOOKS_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default bookReducer;
