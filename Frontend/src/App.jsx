import "./App.css";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
