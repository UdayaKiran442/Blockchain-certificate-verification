import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface CertificateObject {
  batch: string;
  cgpa: string;
  degreeType: string;
  major: string;
  photoHash: string;
  registrationNumer: string;
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
    registrationNumer: "",
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
  return <div>{certificate?.batch}</div>;
};

export default Certificate;
