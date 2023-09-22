import verifier from "../assets/verifier.png";
import getConsent from "../assets/Get consent from individual.svg";
import enterDetails from "../assets/Enter requisite details Students.svg";
import response from "../assets/Get response from NAD.svg";
import accessibility from "../assets/Wide accessibility.svg";
import security from "../assets/Security.svg";
import reliable from "../assets/Reliable.svg";
import economical from "../assets/Economical.svg";
import AcademicHero from "../components/AcademicHero";
import HowToPublish from "../components/HowToPublish";
import AcademiaBenifits from "../components/AcademiaBenifits";

const Verifier = () => {
  return (
    <div>
      <AcademicHero
        buttonName="Verify Now"
        image={verifier}
        text="Join us to examine the student's
              award legitimacy"
        title="We Are Building Nation’s
               Digitalisation Future"
      />
      <HowToPublish
        title="Verification Process"
        card1Title="Get Consent"
        card1Text="Get consent from individuals online or offline to verify the awards."
        cardImg1={getConsent}
        card2Title="Enter requisite details"
        card2Text="To verify fill in the details such as students Roll no, Year of Passing, Mobile no, etc."
        cardImg2={enterDetails}
        card3Text="A requisite response will be given based upon the availability of the awards."
        card3Title="Get response from NAD"
        cardImg3={response}
      />
      <AcademiaBenifits
        title="Benifits"
        benifitHeading1="Wide Accessibility"
        benifitText1="Access to Millions of Digital awards."
        benifitHeading2="Security"
        benifitText2="No risk of relying upon fake and forged awards."
        benifitHeading3="Reliable"
        benifitText3="Quick and reliable verification of academic awards."
        benifitHeading4="Economical"
        benifitText4="Reduction of cost, time and efforts for verification"
        cardImg1={accessibility}
        cardImg2={security}
        cardImg3={reliable}
        cardImg4={economical}
      />
    </div>
  );
};

export default Verifier;
