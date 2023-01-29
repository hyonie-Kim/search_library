let initialState = {
  itemList: {},
  itemNewSpecial: {},
  bestSeller: {},
};

function bookReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_BOOKS_SUCCESS":
      return {
        ...state,
        itemList: payload.itemList,
        itemNewSpecial: payload.itemNewSpecial,
        bestSeller: payload.bestSeller,
      };
    default:
      return { ...state };
  }
}

export default bookReducer;
