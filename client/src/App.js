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
import PrivateRoute from "./route/PrivateRoute";
import NotFound from "./pages/NotFound";

// 프론트에서 서버에 데이터를 요청 하려면 서버 주소 와 HTTP 메소드만 있으면됨

// const SERVER_URL = "http://localhost:5000/";
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true이면 로그인 false이면 로그인아님
  const [serverData, setServerData] = useState("");

  useEffect(() => {
    console.log("authenticate 값", authenticate);
  }, [authenticate]); // authenticate값이 바뀔때마다 출력
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<LibraryCatalog />}
          errorElement={<NotFound />}
        />
        <Route path="/search/:keyword" element={<Books />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/book/:isbn"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route
          path="/register"
          element={<SignUp setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
