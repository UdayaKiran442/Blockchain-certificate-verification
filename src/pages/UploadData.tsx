import { useContext, useEffect, useState } from "react";
import Papa from "papaparse";

import contractInstance from "../utils/contractInstance";

import { AccountContext, ContextObject } from "../context/Provider";

interface CsvRow {
  [key: string]: string | number | boolean | null;
}

interface RegistrarObject {
  universityName: string;
  registrarAddress: string;
}

const UploadData = () => {
  const [csvData, setCsvData] = useState<CsvRow[]>([]);
  const [registrar, setRegistrar] = useState<RegistrarObject>({
    universityName: "",
    registrarAddress: "",
  });
  const { acc, isValidRegistrar } = useContext<ContextObject>(AccountContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onUpload = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setCsvData(result.data as CsvRow[]);
        console.log("Result", result);
      },
    });
    console.log("json:", csvData);
  };

  useEffect(() => {
    const getRegistrarDetails = async () => {
      const method = contractInstance.methods.getRegistrar(acc);
      const registrarData = await method.call();
      console.log("Registrar:", registrarData);
      setRegistrar({
        universityName: registrarData.universityName,
        registrarAddress: registrarData.registrarAddress,
      });
    };
    isValidRegistrar && getRegistrarDetails();
  }, [acc, isValidRegistrar]);

  return (
    <div>
      <input
        className="mt-[50%]"
        accept=".csv"
        type="file"
        onChange={onUpload}
      />
      {registrar && <p>{registrar.universityName}</p>}
    </div>
  );
};

export default UploadData;
