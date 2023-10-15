import { Route, Routes } from "react-router-dom";

import "./App.css";

import { useContext, useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Student from "./pages/Student";
import Verifier from "./pages/Verifier";
import UploadData from "./pages/UploadData";
import AssignRegistrar from "./pages/AssignRegistrar";
import EnterCredentials from "./pages/EnterCredentials";
import Certificate from "./pages/Certificate";

import { AccountContext, ContextObject } from "./context/Provider";

import connectToMetamask from "./utils/connectMetamask";
import getAccounts from "./utils/getAccounts";
import detectAccountChange from "./utils/detectAccountChange";

function App() {
  const {
    acc,
    isOwner,
    isValidRegistrar,
    setAcc,
    setIsOwner,
    setIsValidRegistrar,
    validateOwner,
    validateRegistrar,
  } = useContext<ContextObject>(AccountContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getAcc = async () => {
      acc && (await connectToMetamask());
      const accounts: Array<string> = await getAccounts();
      setAcc(accounts[0]);
    };
    const checkOwner = async () => {
      const isTrueOwner: boolean = await validateOwner();
      setIsOwner(isTrueOwner);
    };

    const checkRegistrar = async () => {
      const isTrueRegistrar: boolean = await validateRegistrar();
      setIsValidRegistrar(isTrueRegistrar);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    getAcc();
    checkOwner();
    checkRegistrar();
    detectAccountChange();
  }, [
    acc,
    setAcc,
    setIsOwner,
    setIsValidRegistrar,
    validateOwner,
    validateRegistrar,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/student" element={<Student />} />
        <Route path="/verifier" element={<Verifier />} />
        {isOwner ? (
          <Route path="/owner/assign-registrar" element={<AssignRegistrar />} />
        ) : isValidRegistrar ? (
          <Route
            path="/academia/upload-student-data"
            element={<UploadData />}
          />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/verify/credentials" element={<EnterCredentials />} />
        <Route path="/view/certificate" element={<Certificate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
