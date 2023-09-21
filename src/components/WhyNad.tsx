import whynad from "../assets/whynad.png";

import SectionHeadings from "./SectionHeadings";

const WhyNad = () => {
  return (
    <div className="flex gap-10  mt-6 justify-center">
      {/* why nad text */}
      <div>
        <SectionHeadings heading="Why NAD?" textCenter="" />
        <p className="mt-4 font-light">
          National Academic Depository (NAD) is born out of an initiative to{" "}
          <br />
          provide a 24X7 online depository to Academic institutions to store and{" "}
          <br />
          publish their academic awards. The digital depository not only ensures{" "}
          <br />
          easy access to and retrieval of an academic award but also validates{" "}
          <br />
          and guarantees its authenticity and safe storage. <br />
          <ul className="list-disc ml-4">
            <li>
              NAD provides a platform for storing and accessing the tamper-proof{" "}
              <br />
              marks-sheets to all the stakeholders.
              <br />
            </li>
            <li>
              NAD utilises blockchain architecture to ensure all documents are{" "}
              <br />
              securely stored and increases trust
            </li>
            <li>
              The stakeholders would be able to access them and be assured of{" "}
              <br />
              the genuineness of the information.
            </li>
          </ul>
        </p>
      </div>
      {/* why nad image */}
      <div>
        <img
          src={whynad}
          alt="Why Nad"
          className="ml-14"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default WhyNad;
