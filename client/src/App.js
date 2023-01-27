import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./page/BookDetail";
import LibraryCatalog from "./page/LibraryCatalog";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LibraryCatalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Library/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;
