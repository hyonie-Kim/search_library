import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetail";
import LibraryCatalog from "./pages/LibraryCatalog";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// 프론트에서 서버에 데이터를 요청 하려면 서버 주소 와 HTTP 메소드만 있으면됨

// const SERVER_URL = "http://localhost:5000/";
function App() {
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

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LibraryCatalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Library/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
