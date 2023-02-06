import api from "../api";
import server from "../server";

const API_KEY = process.env.REACT_APP_API_KEY;
function getBooks(isbn) {
  server.get("api").then((res) => {
    console.log("server!!!! ", res.data);
  });

  return async (dispatch) => {
    console.log("액셔냉겻????", isbn);
    try {
      dispatch({ type: "GET_BOOKS_REQUEST" });
      const itemListApi = api.get(
        `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
      );

      const itemNewSpecialApi = api.get(
        `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewSpecial&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
      );

      const bestSellerApi = api.get(
        `ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
      );
      const itemDetailApi = api.get(
        `ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&Cover=Big&ItemId=${isbn}&output=js&Version=20131101`
      );
      const bookSearchApi = api.get(
        `ItemSearch.aspx?ttbkey=${API_KEY}&Query=${isbn}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&OptResult=Toc,Story,fulldescription`
      );

      let [itemList, itemNewSpecial, bestSeller, itemDetail, bookSearch] =
        await Promise.all([
          itemListApi,
          itemNewSpecialApi,
          bestSellerApi,
          itemDetailApi,
          bookSearchApi,
        ]);
      // console.log(itemList);
      // console.log(itemNewSpecial);
      // console.log(bestSeller);
      console.log("itemDetailitemDetail", itemDetail);
      console.log("bookSearchApibookSearchApi", bookSearch);
      dispatch({
        type: "GET_BOOKS_SUCCESS",
        payload: {
          itemList: itemList.data,
          itemNewSpecial: itemNewSpecial.data,
          bestSeller: bestSeller.data,
          itemDetail: itemDetail.data.item,
          bookSearch: bookSearch.data,
        },
      });
    } catch (err) {
      //에러 핸들링
      dispatch({ type: "GET_BOOKS_FAILURE" });
    }
  };
}

export const bookAction = {
  getBooks,
};
