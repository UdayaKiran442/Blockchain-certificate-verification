import { useContext } from "react";

import AcademiaBenifits from "../components/AcademiaBenifits";
import AcademicHero from "../components/AcademicHero";
import HowToPublish from "../components/HowToPublish";

import { AccountContext, ContextObject } from "../context/Provider";

import academic from "../assets/academia.png";
import fill from "../assets/Prepare and upload.svg";
import register from "../assets/Register.svg";
import publish from "../assets/Publish.svg";
import award from "../assets/Valid Awards.svg";
import secure from "../assets/Secured.svg";
import transparency from "../assets/Transparency.svg";
import authenticated from "../assets/Authentic.svg";

const Academia = () => {
  const { isValidRegistrar, isOwner } =
    useContext<ContextObject>(AccountContext);
  return (
    <div>
      <AcademicHero
        buttonName={
          isOwner
            ? "Assign Registrar"
            : isValidRegistrar
            ? "Upload student data"
            : "Connect to Wallet"
        }
        image={academic}
        title="Let's Begin Your Digital 
          Transformational Journey 
          Through Blockchain Based NAD "
        text=" Now publish your student's academic awards easily!"
        isAuthorised={isValidRegistrar}
        isContractOwner={isOwner}
      />
      <HowToPublish
        cardImg2={fill}
        cardImg1={register}
        cardImg3={publish}
        card1Title="Register"
        card1Text="Register your academic institution by connecting wallet to NAD"
        card2Text="Fill the form with student details"
        card2Title="Prepare and Upload"
        card3Text="Publish the certificates on Blockchain for student's access"
        card3Title="Publish"
        title="How to Publish"
      />
      <AcademiaBenifits
        cardImg4={authenticated}
        cardImg1={award}
        cardImg2={secure}
        cardImg3={transparency}
        benifitHeading1="Valid Awards"
        benifitText1="Digital Awards are legally valid under IT Act, 2000"
        benifitHeading2="Secure"
        benifitText2="Secure Issuance of Digital Awards in blockchain"
        benifitHeading3="Transparency"
        benifitText3="Efficient, effective, and transparent administration"
        benifitHeading4="Authenticated by NAD"
        benifitText4="All academic awards verification needs can be addressed by NAD"
        title="Benifits"
      />
    </div>
  );
};

export default Academia;
