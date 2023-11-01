import React, { useLayoutEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useLocation } from "react-router-dom";

import secure_storage from "../assets/secure_storage.png";
import digital_signature from "../assets/digital_signature.png";

interface CertificateObject {
  batch: string;
  cgpa: string;
  degree: string;
  department: string;
  registrationNumber: string;
  studentName: string;
}

const Certificate: React.FC = () => {
  const [certificateHash, setCertificateHash] = useState<string>("");
  const [photoHash, setPhotoHash] = useState<string>("");
  const [certificate, setCertificate] = useState<CertificateObject>({
    batch: "",
    cgpa: "",
    degree: "",
    department: "",
    registrationNumber: "",
    studentName: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  useLayoutEffect(() => {
    setLoading(true);
    const { certificate } = location.state;
    console.log("Certificate", certificate);
    setCertificateHash(certificate.certificateHash);
    setPhotoHash(certificate.photoHash);

    const getCertificate = async () => {
      const response = await axios.get(
        `https://gateway.pinata.cloud/ipfs/${certificateHash}`
      );
      console.log("Certificate from pinata:", response);
      setCertificate(response.data);
    };
    setLoading(false);

    getCertificate();
  }, [location.state, certificateHash]);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <div>
        <h1 className="text-center mt-20 font-bold text-4xl ">
          Digital Certificate
        </h1>
      </div>
      <div className="p-5">
        <div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">Student Name</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.studentName}</p>
                  </TableCell>
                  <TableCell rowSpan={6}>
                    <img
                      src={`https://apricot-accepted-crow-745.mypinata.cloud/ipfs/${photoHash}`}
                      alt="Your Image"
                      className="ml-4"
                    />
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">University Name</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{location.state.univName}</p>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">Registration Number</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.registrationNumber}</p>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">Degree Type</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.degree}</p>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">Major</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.department}</p>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">CGPA</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.cgpa}</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div></div>
      </div>

      <div className="flex justify-around mb-10">
        {/* securely stored on blockchain logo */}
        <div>
          <img
            width={150}
            className="rounded-full"
            height={150}
            src={secure_storage}
            alt=""
          />
          <p className="bg-green-600 text-secondaryWhite pl-0 pr-6 -ml-12 rounded px-5">
            Securely stored on blockchain{" "}
          </p>
        </div>
        {/* digitally signed logo */}
        <div>
          <img
            width={150}
            className="rounded-full"
            height={150}
            src={digital_signature}
            alt=""
          />
          <p className="bg-green-600 text-secondaryWhite pl-0 pr-6 -ml-16 rounded px-5">
            Digitally signed by Registrar of {location.state.univName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
