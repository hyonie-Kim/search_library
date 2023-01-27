# Search_Library

1. 전체 도서 목록페이지, 로그인, 도서 상세페이지
2. 전체 페이지에서는 전체 도서 목록을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.

## Installation

### npx create-react-app 설치

### npx install react-router-dom

1. 브라우저 라우터 셋팅

- `index.js`에서 import {BrowserRouter} form "react-router-dom";
- `<App/>`을 `<BrowserRouter>`로 감싸야함

2. 라우터 만들기

- src/App.js에서 `<Routes>`로 `<Route>`만들기
- `<Routes>` 안에 `<Route>`를 넣는다.

3. 페이지 만들기

- element에 어떤 페이지를 보여줘야할지 설정하고 path까지넣어준다.

## 환경변수

- .env : 파일 내부에 공백 넣지 말것
- 리액트 사용시 API KEY 앞에 REACT_APP 붙여줘야함
