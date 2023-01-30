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

- 리덕스 라이브러리 설치
- index.js에서 Provider 임포트
- Provider은 store를 넣어주기 위해 존재 하는것. 때문에 store props를 항상 가지고 있다.

### `FontAwesome` React버전 설치

- React Font Awesome 웹사이트 free 아이콘사용
- solid/ regular 스타일 적용

### react-bootstrap 설치

- 부트스트랩 CSS파일 import

## redux 설치

### `npm install redux react-redux`

**Redux설치/셋팅 방법**

- state를 마음대로 보관가능

```javascript
import { Provider } from "react-redux";
import { createStore } from "redux";
```

### `npm install redux-thunk`

API를 사용할 리덕스 미들웨어인 redux-thunk 설치

### `npm install --save redux-devtools-extension`

redux-devtools 를 통해서 리덕스 state을 확인할수 있다.

- `yarn add @redux-devtools/extension`

### `npm install axios`

## `express`와 `http-proxy-middleware` 미들웨어를 이용하여 proxy 설정하는 방법

Reactapp의 src폴더에 setProxy.js 파일을 생성한 뒤에 'http-proxy-middleware'모듈을 이용하여 프록시를 설정

### `npm i http-proxy-middleware --save`

## 리액트 프로젝트 빌드

리액트는 개발 끝나면 build를 해야 쓸수 있음. bulid를 해야 html파일이 나옴

### `npm run build`

## 환경변수

- .env : 파일 내부에 공백 넣지 말것
- 리액트 사용시 API KEY 앞에 REACT_APP 붙여줘야함

# 서버

**/server.js**

```javascript
app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "리액트로 만든 html파일 경로"));
});
```

# CORS

- 서버에서 cors 정책 해결 이슈
  Client: localhost:3000(react 개발서버), Server: localhost:4000
  출처가 다르기 때문에 생기는 에러이다. Origin이 다르면 데이터를 꺼내갈수 없다는 정책

### `npm install cors`

# 리덕스 사용법 정리하기

## Store.js 기본 세팅

1. redux/store.js 만들기
2. store를 만들어 내는 함수 인 createStore 를 redux로 부터 가져온다. `import {createStore} form "redux"`
3. 그리고 store를 변수를 만든다. createStore 매개변수로 reducer가 들어간다.
4. reducer를 아직 안만들었기 때문에 redux폴더에서 reducers 폴더 만들기.
5. 책 API를 가져오는 reducer를 만든다. reducer/bookReducer.js
6. 관리해야하는 state가 무엇이 있는지 작성한다. 먼저 `let initialState={}`객체를 만든다.
7. 그리고 리듀서는 함수이다. 리듀서는 파라미터 2개를 가지고 있다. `function bookReducer(state, action){}`
8. state는 초기값으로 항상 initialState를 넣어야한다.
9. 리듀서를 항상 export default로 bookReducer 사용할수 있도록한다. 그러면 store에서 사용할수 있다.
10. 스토어에 리듀서를 연결하고 스토어를 index.js에서 import한다

## 미들웨어 세팅

1. applyMiddleware를 가져와서 `createStore()` 두번째 인자로 리듀서 다음에 넣어주면 된다.
2. thunk도 같이 import하고 가져온다. thunk는 'redux-thunk'로 부터 옴.
3. 즉 미들웨어(applyMiddleware)를 적용시켜주는데 그것은 thunk이다.
4. 미들웨어도 사용할 준비 완료!

## 미들웨어 함수 만들기 - action creator

1. redux폴더에서 actions폴더를 만든다.
2. actions/bookAction.js파일을 만든다. 해당파일에 미들웨어 함수를 만든다.
3. 첫번째로 만들 함수는 getBooks 함수를 미들웨어로 만든다. 미들웨어 함수는 함수를 리턴한다.
4. 미들웨어 함수에 return값에는 2개의 매개변수가 있다. 그것은 dispatch와 getState
5. 객체에 함수를 담아서 반환한다. 객체 안에는 해당 함수가 담겨 있다.
6. 왜냐하면 해당 함수가 여러개가 될거라서 객체에 담아서 리턴을 한다.
7. LibraryCatalog에서 bookAction을 import한다.
8. 해당 액션을 콜하기 위해서는 디스패치가 필요하다. 때문에 디스패치도 임포트!
9. 디스패치를 가지고 액션을 호출을 해줄텐데 여기서 바로 액션객체를 던지는것이 아니라 `dispatch(bookAction.getBooks()` bookAction에 있는 getBooks함수를 부른다. 그러면 해당 getBooks 미들웨어를 거쳐서 간다.
10. 디스패치가 보낸 액션에 따라서 리듀서를 만들어주면 된다.
11. useState 대신에 useSelector를 사용해서 값을 가져와야한다.
12. 스토어에도 반드시 리듀서를 설정해둔다.
