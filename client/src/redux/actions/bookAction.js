import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getBooks() {
  return async (dispatch) => {
    const itemListApi = api.get(
      `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
    );

    const itemNewSpecialApi = api.get(
      `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewSpecial&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
    );

    const bestSellerApi = api.get(
      `ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
    );

    let [itemList, itemNewSpecial, bestSeller] = await Promise.all([
      itemListApi,
      itemNewSpecialApi,
      bestSellerApi,
    ]);
    // console.log(itemList);
    // console.log(itemNewSpecial);
    // console.log(bestSeller);
    dispatch({
      type: "GET_BOOKS_SUCCESS",
      payload: {
        itemList: itemList.data,
        itemNewSpecial: itemNewSpecial.data,
        bestSeller: bestSeller.data,
      },
    });
  };
}

export const bookAction = {
  getBooks,
};
