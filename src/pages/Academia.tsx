import AcademiaBenifits from "../components/AcademiaBenifits";
import AcademicHero from "../components/AcademicHero";
import HowToPublish from "../components/HowToPublish";

import academic from "../assets/academia.png";
import fill from "../assets/Prepare and upload.svg";
import register from "../assets/Register.svg";
import publish from "../assets/Publish.svg";

const Academia = () => {
  return (
    <div>
      <AcademicHero
        buttonName="Connect to Wallet"
        image={academic}
        title="Let's Begin Your Digital 
          Transformational Journey 
          Through Blockchain Based NAD "
        text=" Now publish your student's academic awards easily!"
      />
      <HowToPublish
        fill={fill}
        register={register}
        publish={publish}
        card1Title="Register"
        card1Text="Register your academic institution by connecting wallet to NAD"
        card2Text="Fill the form with student details"
        card2Title="Prepare and Upload"
        card3Text="Publish the certificates on Blockchain for student's access"
        card3Title="Publish"
        title="How to Publish"
      />
      <AcademiaBenifits />
    </div>
  );
};

export default Academia;
