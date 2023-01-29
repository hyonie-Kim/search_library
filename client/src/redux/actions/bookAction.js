import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getBooks() {
  return async (dispatch) => {
    const itemListApi = await api.get(
      `ttbkey=${API_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
    );
  };
}

export const bookAction = {
  getBooks,
};
