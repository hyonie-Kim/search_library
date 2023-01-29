const { createProxyMiddleware } = require("http-proxy-middleware");

// 클라이언트에 프록시 설정해주면 fetch요청시 '/api'와 같이 상대경로로 타켓 서버에 접근할 수 있다.
// 보통 CORS이슈를 해결하기 위해서 서버에서 cors모듈을 사용하거나 클라이언트에서 프록시를 설정해준다.

// module.exports = (app) => {
//   app.use(
//     createProxyMiddleware("/api", {
//       //api로 시작하는 모든요청들은 target을 localhost5000번으로 바꾼다.
//       target: "http://localhost:5000",
//       changeOrigin: true,
//     })
//   );
// };

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://www.aladin.co.kr/ttb/api",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
