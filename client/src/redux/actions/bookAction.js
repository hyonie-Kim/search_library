import api from "../api";

const TTBKEY = process.env.REACT_APP_TTBKEY;
function getBooks() {
  return async (dispatch) => {
    const itemListApi = await api.get(
      `ttbkey=${TTBKEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
    );
  };
}

export const bookAction = {
  getBooks,
};
