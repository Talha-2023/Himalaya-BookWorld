import "./App.css";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  return (
    <div className="dark:bg-[#1E232A] dark:text-[#A6ADBB] ">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        {/* <Swipper /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
