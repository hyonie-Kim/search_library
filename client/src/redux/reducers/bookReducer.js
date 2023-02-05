let initialState = {
  itemList: {},
  itemNewSpecial: {},
  bestSeller: {},
  itemDetail: {},
  bookSearch: {},
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
        itemDetail: payload.itemDetail,
        bookSearch: payload.bookSearch,
        loading: false,
      };
    case "GET_BOOKS_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default bookReducer;
