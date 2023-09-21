import SectionHeadings from "./SectionHeadings";
import BenifitsCard from "./BenifitsCard";

import video from "../assets/academic_banner.mp4";
import institutions from "../assets/Institution.svg";
import students from "../assets/Students.svg";
import verifier from "../assets/Verifier.svg";

const Benifits = () => {
  return (
    <div className="flex gap-16 bg-secondaryWhite justify-center mb-10 mt-10 ">
      {/* section cards */}
      <div className="flex items-center gap-6 ml-14">
        {/* left card */}
        <div>
          <BenifitsCard
            image={institutions}
            heading="Institutions"
            text="Digital Awards are legally valid under IT Act, 2000.
Secure Issuance of Digital Awards in Blockchain"
          />
          <br />
          <BenifitsCard
            image={students}
            heading="Students"
            text="Globally recognized and acceptable awards
            Easily sharable & verifiable with anybody"
          />
        </div>
        {/* right card */}
        <div>
          <BenifitsCard
            image={verifier}
            heading="Verifiers"
            text="Access to Millions of Digital awards
            No risk of relying upon fake and forged awards"
          />
        </div>
      </div>
      {/* section heading and text */}
      <div>
        <SectionHeadings heading="Benifits of NAD" textCenter="" />
        <p className="mt-4 font-light">
          Aimed at the concept of paperless governance. It reduces the <br />
          administrative overhead by minimizing the use of paper and curtailing{" "}
          <br />
          the verification process. It is permanent and safe record keeping for{" "}
          <br />
          all institutions. Students can access and transfer their awards <br />
          easily. It also avoids the risk of forged certificates. <br />
        </p>
        <video width={320} height={240} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Benifits;
