import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Student from "./pages/Student";
import Verifier from "./pages/Verifier";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/student" element={<Student />} />
        <Route path="/verifier" element={<Verifier />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
