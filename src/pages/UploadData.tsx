import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";

import contractInstance from "../utils/contractInstance";
import { pinata_api_key, pinata_secret_api_key } from "../utils/pinataKeys";
import web3 from "../utils/web3";

import { AccountContext, ContextObject } from "../context/Provider";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpg";

import InputField from "../components/InputField";

interface RegistrarObject {
  universityName: string;
  registrarAddress: string;
}

interface StudentObject {
  studentName: string;
  registrationNumber: string;
  degree: string;
  department: string;
  batch: string;
  cgpa: string;
}

const UploadData = () => {
  const [registrar, setRegistrar] = useState<RegistrarObject>({
    universityName: "",
    registrarAddress: "",
  });
  const [studentData, setStudentData] = useState<StudentObject>({
    studentName: "",
    registrationNumber: "",
    degree: "",
    department: "",
    batch: "",
    cgpa: "",
  });
  const [photoHash, setPhotoHash] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [certificateHash, setCertificateHash] = useState();
  const [imageFile, setImageFile] = useState();
  const { acc, isValidRegistrar } = useContext<ContextObject>(AccountContext);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhotoUpload = async (e: any) => {
    e.preventDefault();
    setImageFile(e.target.files[0]);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        const resFile = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            headers: {
              pinata_api_key,
              pinata_secret_api_key,
            },
          }
        );
        console.log(resFile);
        setPhotoHash(resFile.data.IpfsHash);
      }
      const resJson = await axios.post(
        "https://api.pinata.cloud/pinning/pinJsonToIPFS",
        studentData,
        {
          headers: {
            pinata_api_key,
            pinata_secret_api_key,
          },
        }
      );
      setCertificateHash(resJson.data.IpfsHash);
      const method = contractInstance.methods.addCertificate(
        registrar.universityName,
        studentData.registrationNumber,
        certificateHash,
        photoHash
      );
      const tx = {
        from: acc,
        to: contractInstance.options.address,
        gas: 3000000,
        data: method.encodeABI(),
      };
      const resposne = await web3.eth.sendTransaction(tx);
      console.log("Add certificate response:", resposne);
      setLoading(false);
      alert("Data uploaded succesfully");
      navigate("/academia");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      alert(error.message);
      console.log(error);
    }
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
      {/* form */}
      <div className="flex flex-col gap-4 items-center p-5">
        <InputField
          type="text"
          placeholder="Student Name"
          name="studentName"
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Registration Number"
          name="registrationNumber"
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Department"
          name="department"
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="Batch"
          name="batch"
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="CGPA"
          name="cgpa"
          onChange={handleChange}
        />
        <input
          onChange={handlePhotoUpload}
          type="file"
          className="file:text-primaryBlue  file:bg-white  file:transition-colors file:py-1 file:px-5 file:cursor-pointer file:border-primaryBlue "
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={
            !loading
              ? "bg-primaryBlue text-secondaryWhite px-8 py-2"
              : "bg-blue-600 text-secondaryWhite px-8 py-2"
          }
          disabled={loading ? true : false}
        >
          {loading ? "Uploading Data..." : "Upload Data"}
        </button>
      </div>
    </div>
  );
};

export default UploadData;
