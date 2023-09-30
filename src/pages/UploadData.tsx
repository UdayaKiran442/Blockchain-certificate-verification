import { useContext, useEffect, useState } from "react";
import Papa from "papaparse";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import contractInstance from "../utils/contractInstance";

import { AccountContext, ContextObject } from "../context/Provider";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpg";

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
      try {
        const method = contractInstance.methods.getRegistrar(acc);
        const registrarData = await method.call();
        console.log("Registrar:", registrarData);
        setRegistrar({
          universityName: registrarData.universityName,
          registrarAddress: registrarData.registrarAddress,
        });
      } catch (error) {
        console.log("Error in fetching details of registrar");
      }
    };
    isValidRegistrar && getRegistrarDetails();
  }, [acc, isValidRegistrar]);

  return (
    <div className="mt-10">
      {/* carousel */}
      <div>
        <Carousel showThumbs={false} infiniteLoop dynamicHeight>
          <div>
            <img src={banner1} alt="" />
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
          <div>
            <img src={banner3} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold text-2xl text-center">
          <span className="text-primaryBlue">Welcome!</span> Registrar of{" "}
          {registrar.universityName}
        </h2>
        <p className="text-center">
          Secure your{" "}
          <span className="text-primaryBlue">students achievements</span> in a
          single click
        </p>
      </div>
      <div className="flex flex-col p-6 items-center">
        <input
          className="file:text-primaryBlue  file:bg-white  file:transition-colors file:py-1 file:px-5 file:cursor-pointer file:border-primaryBlue "
          accept=".csv"
          type="file"
          onChange={onUpload}
        />
        <p className="text-xs -ml-52 font-light">Only .csv files accepted</p>
        <button className="text-secondaryWhite shadow-lg mt-5 bg-primaryBlue border border-blue-50 py-1 px-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadData;
