import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import NavBar from "./components/NavBar";
import MyJumbotron from "./components/MyJumbotron";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MyJumbotron />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:company" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
