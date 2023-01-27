import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/BookDetail";
import LibraryCatalog from "./pages/LibraryCatalog";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

function App() {
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
