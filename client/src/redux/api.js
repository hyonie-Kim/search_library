import axios from "axios";

const api = axios.create({
  // baseURL: "http://www.aladin.co.kr/ttb/api",
  baseURL: "/api",
  //   timeout: 1000,
  headers: { "Content-type": "application/json" },
});

// 요청 인터셉터 추가하기
api.interceptors.request.use(
  function (config) {
    console.log("request Start", config);
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    console.log("request error", error);
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
    console.log("get response", response);
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    console.log("response error", error);
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

export default api;
