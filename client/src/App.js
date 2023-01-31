import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "antd-button-color/dist/css/style.css";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./components/BookDetail";
import LibraryCatalog from "./pages/LibraryCatalog";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Books from "./pages/Books";
import SignUp from "./pages/SignUp";

// 프론트에서 서버에 데이터를 요청 하려면 서버 주소 와 HTTP 메소드만 있으면됨

// const SERVER_URL = "http://localhost:5000/";
function App() {
  const [authenticate, setAutjenticate] = useState(false); // true이면 로그인 false이면 로그인아님
  const [serverData, setServerData] = useState("");

  // const getData = async () => {
  //   const res = await axios.get(SERVER_URL);

  //   console.log(res);
  // };
  // getData();
  // const getData = () => {
  //   let body = {
  //     data: "클라이언트에서 보낸 데이터",
  //   };
  //   axios
  //     .post("/api/getData", {
  //       body,
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         setServerData(response.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // console.log(getData());

  // const getCurrent = () => {
  //   console.log("getCurrent");
  // };
  // useEffect(() => {
  //   getCurrent();
  // }, []);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LibraryCatalog />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Library/:id" element={<BookDetail />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
