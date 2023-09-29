import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import axios from "axios";
import { useLocation } from "react-router-dom";

interface CertificateObject {
  batch: string;
  cgpa: string;
  degreeType: string;
  major: string;
  photoHash: string;
  registrationNumber: string;
  studentName: string;
}

const Certificate: React.FC = () => {
  const [certificateHash, setCertificateHash] = useState<string>("");
  const [certificate, setCertificate] = useState<CertificateObject>({
    batch: "",
    cgpa: "",
    degreeType: "",
    major: "",
    photoHash: "",
    registrationNumber: "",
    studentName: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const { certificate } = location.state;
    console.log("Certificate", certificate);
    setCertificateHash(certificate.hash);

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
    <div className="mt-5">
      <div>
        <h1 className="text-center font-bold text-4xl ">Digital Certificate</h1>
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
                      src={`https://apricot-accepted-crow-745.mypinata.cloud/ipfs/${certificate.photoHash}`}
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
                    <p className="text-lg">{certificate.degreeType}</p>
                  </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component="th" scope="row">
                    <p className="font-semibold">Major</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="text-lg">{certificate.major}</p>
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

      <div>
        {/* securely stored on blockchain logo */}
        <div></div>
        {/* digitally signed logo */}
        <div></div>
      </div>
    </div>
  );
};

export default Certificate;
