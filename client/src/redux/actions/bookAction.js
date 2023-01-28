import api from "../api";

function getBooks() {
  return async (dispatch) => {
    const itemListApi =
      await api.get(`ttbkey=[TTBKey]&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=
    xml&Version=20131101
    `);
  };
}

export const bookAction = {
  getBooks,
};
