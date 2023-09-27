import React, { useState } from "react";

const AssignRegistrar: React.FC = () => {
  const [univName, setUnivName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(univName, address);
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
