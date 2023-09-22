import AcademicHero from "../components/AcademicHero";
import HowToPublish from "../components/HowToPublish";
import AcademiaBenifits from "../components/AcademiaBenifits";

import student from "../assets/students.png";
import institution from "../assets/Institution (1).svg";
import requisite from "../assets/Enter requisite details Students.svg";
import awards from "../assets/Pull academic awards.svg";
import www from "../assets/Worldwide recognition-Students.svg";
import stored from "../assets/Digitally Stored- Student.svg";
import sharing from "../assets/Hassle-free Sharing- Student.svg";
import safety from "../assets/Safety- Student.svg";

const Student = () => {
  return (
    <div>
      <AcademicHero
        image={student}
        text="Access Your Academic Awards at
              Ease -ANYTIME! ANYWHERE!"
        buttonName="Verify Credentials"
        title="Digital Revolution to 
               Empower Every Student"
      />
      <HowToPublish
        title="How to get your Awards"
        card1Title="Select University/Institution"
        card1Text="Search for your Board/ University/ Institution in Blockchain to get awards"
        card2Text="Fill in the details such as Roll no, Year of Passing, etc., and submit the details"
        card2Title="Enter requisite details"
        card3Text="Blockchain will search for your requested awards and they will be saved in your “Issued Document”"
        card3Title="Pull academic awards"
        cardImg1={institution}
        cardImg2={requisite}
        cardImg3={awards}
      />
      <AcademiaBenifits
        title="Benifits"
        benifitHeading1="Worldwide Recognition"
        benifitText1="Globally recognized and acceptable awards."
        cardImg1={www}
        benifitHeading2="Digitally Stored"
        benifitText2="An online, permanent record of academic awards"
        cardImg2={stored}
        benifitHeading3="Hassle free sharing"
        benifitText3="Easily sharable and verifiable to anybody"
        cardImg3={sharing}
        benifitHeading4="Safety"
        benifitText4="No risk of losing, spoiling, and damaging academic award"
        cardImg4={safety}
      />
    </div>
  );
};

export default Student;
