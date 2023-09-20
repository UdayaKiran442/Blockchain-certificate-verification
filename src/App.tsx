import { Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Student from "./pages/Student";
import Verifier from "./pages/Verifier";

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
    </>
  );
}

export default App;
