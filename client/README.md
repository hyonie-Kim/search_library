# Search_Library

개발 목록 리스트

1. 전체 도서 목록페이지, 로그인, 도서 상세페이지
   - 네비게이션 바 만들기
2. 전체 페이지에서는 전체 도서 목록을 볼 수 있다.
   - 2가지 도서 목록 종류 (신작, 최신인기)
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
4. 도서 검색을 할수 있다.

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

- `<Route>` 안에는 두개의 props를 가지고 간다.
- path로 경로 설정과 element에 어떤 페이지를 보여줘야할지 설정한다.
- 디테일 페이지에서는 정확히 하나의 도서페이지 정보만 가져와야하기 때문에 :id값을 넣어준다.

4. 리덕스 세팅

- index.js에서 Provider 임포트
- Provider은 store를 넣어주기 위해 존재 하는것. 때문에 store props를 항상 가지고 있다.

### `FontAwesome` React버전 설치

- React Font Awesome 웹사이트 free 아이콘사용
- solid/ regular 스타일 적용

### react-bootstrap 설치

- 부트스트랩 CSS파일 import

## redux 설치

### `npm install redux react-redux`

### `npm install redux-thunk`

API를 사용할 리덕스 미들웨어인 redux-thunk 설치

### `npm install --save redux-devtools-extension`

redux-devtools 를 통해서 리덕스 state을 확인할수 있다.

- `yarn add @redux-devtools/extension`

### `npm install axios`

## 환경변수

- .env : 파일 내부에 공백 넣지 말것
- 리액트 사용시 API KEY 앞에 REACT_APP 붙여줘야함
