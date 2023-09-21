import SectionHeadings from "./SectionHeadings";

import award from "../assets/Valid Awards.svg";
import secure from "../assets/Secured.svg";
import transparency from "../assets/Transparency.svg";
import authenticated from "../assets/Authentic.svg";
import BenifitsCard from "./BenifitsCard";

const AcademiaBenifits = () => {
  return (
    <div className="-mt-8">
      <SectionHeadings heading="Benifits" textCenter="text-center" />
      <div className="flex justify-between p-5 ">
        <BenifitsCard
          heading="Valid Awards"
          text="Digital Awards are legally valid under IT Act, 2000"
          image={award}
        />
        <BenifitsCard
          heading="Secures"
          text="Secure Issuance of Digital Awards in blockchain"
          image={secure}
        />
        <BenifitsCard
          heading="Transaparency"
          text="Efficient, effective, and transparent administration"
          image={transparency}
        />
        <BenifitsCard
          heading="Authenticated by NAD"
          text="All academic awards verification needs can be addressed by NAD"
          image={authenticated}
        />
      </div>
    </div>
  );
};

export default AcademiaBenifits;
