import React, { useContext, useState } from "react";

import contractInstance from "../utils/contractInstance";

import { AccountContext, ContextObject } from "../context/Provider";
import web3 from "../utils/web3";

const AssignRegistrar: React.FC = () => {
  const [univName, setUnivName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { acc } = useContext<ContextObject>(AccountContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      console.log(univName, address);
      const method = contractInstance.methods.assignRegistrar(
        univName,
        address
      );
      console.log("Assign registrar method:", method);
      const tx = {
        from: acc,
        to: contractInstance.options.address,
        gas: 3000000,
        data: method.encodeABI(),
      };
      const response = await web3.eth.sendTransaction(tx);
      console.log(response);
    } catch (error) {
      console.log("Error in assigning registrar:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[94.5vh] bg-secondaryWhite ">
        <input
          className="w-[30%] placeholder:p-2 placeholder:text-slate-400 placeholder:font-light rounded-md  border-primaryBlue border-2"
          type="text"
          placeholder="Enter university of registrar"
          onChange={(e) => setUnivName(e.target.value)}
        />
        <br />
        <input
          className="w-[30%] placeholder:p-2 placeholder:text-slate-400 placeholder:font-light rounded-md  border-primaryBlue border-2"
          type="text"
          placeholder="Enter wallet address of registrar"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="text-primaryBlue mt-5 hover:bg-primaryBlue hover:text-white transition-colors  hover:border-white  bg-white border-2 py-1 px-5 border-primaryBlue"
        >
          Assign Registrar
        </button>
      </div>
    </div>
  );
};

export default AssignRegistrar;
