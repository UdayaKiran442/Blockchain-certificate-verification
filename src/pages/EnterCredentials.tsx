import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";

import contractInstance from "../utils/contractInstance";

const EnterCredentials: React.FC = () => {
  const navigate = useNavigate();
  const [univName, setUnivName] = useState<string>("");
  const [regNum, setRegNum] = useState<string>("");
  const handleSubmit = async () => {
    try {
      const method = contractInstance.methods.getCertificate(univName, regNum);
      const certificate = await method.call();
      console.log("Certificate:", certificate);
      navigate("/view/certificate", { state: { certificate, univName } });
    } catch (error) {
      console.log("Error in fetching certificate", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[94.5vh] bg-secondaryWhite ">
        <InputField
          placeholder="Enter university name"
          type="text"
          onChange={(e) => setUnivName(e.target.value)}
        />
        <br />
        <InputField
          placeholder="Enter registration number"
          type="text"
          onChange={(e) => setRegNum(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="text-primaryBlue mt-5 hover:bg-primaryBlue hover:text-white transition-colors  hover:border-white  bg-white border-2 py-1 px-5 border-primaryBlue"
        >
          Get Credentials
        </button>
      </div>
    </div>
  );
};

export default EnterCredentials;
