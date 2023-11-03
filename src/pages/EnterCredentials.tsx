import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";

import contractInstance from "../utils/contractInstance";

const EnterCredentials: React.FC = () => {
  const navigate = useNavigate();
  const [univName, setUnivName] = useState<string>("");
  const [regNum, setRegNum] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    try {
      if (univName === "" || regNum === "") {
        // alert("Fields cannot be empty");
        message.error("Fields cannot be empty");
        return;
      }
      setLoading(true);
      const method = contractInstance.methods.getCertificate(univName, regNum);
      const certificate = await method.call();
      console.log("Certificate:", certificate);
      setLoading(false);
      navigate("/view/certificate", { state: { certificate, univName } });
      message.success("Certificate fetched succesfully from blockchain");
    } catch (error) {
      message.error("Invalid credentials");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[94.5vh] bg-secondaryWhite ">
        <InputField
          placeholder="Enter university name"
          type="text"
          onChange={(e) => setUnivName(e.target.value)}
          name=""
        />
        <br />
        <InputField
          placeholder="Enter registration number"
          type="text"
          onChange={(e) => setRegNum(e.target.value)}
          name=""
        />
        <button
          onClick={handleSubmit}
          disabled={loading ? true : false}
          className="text-primaryBlue mt-5 hover:bg-primaryBlue hover:text-white transition-colors  hover:border-white  bg-white border-2 py-1 px-5 border-primaryBlue"
          style={{ opacity: loading ? 0.5 : 1 }}
        >
          {!loading ? "Get Credentials" : "Fetching details"}
        </button>
      </div>
    </div>
  );
};

export default EnterCredentials;
