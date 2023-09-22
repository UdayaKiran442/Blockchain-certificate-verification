import SectionHeadings from "./SectionHeadings";
import BenifitsCard from "./BenifitsCard";

interface props {
  title: string;
  benifitHeading1: string;
  benifitText1: string;
  benifitHeading2: string;
  benifitText2: string;
  benifitHeading3: string;
  benifitText3: string;
  benifitHeading4: string;
  benifitText4: string;
  cardImg1: string;
  cardImg2: string;
  cardImg3: string;
  cardImg4: string;
}

const AcademiaBenifits = ({
  title,
  benifitHeading1,
  benifitText1,
  benifitHeading2,
  benifitText2,
  benifitHeading3,
  benifitText3,
  benifitHeading4,
  benifitText4,
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
}: props) => {
  return (
    <div className="-mt-8">
      <SectionHeadings heading={title} textCenter="text-center" />
      <div className="flex justify-between p-5 ">
        <BenifitsCard
          heading={benifitHeading1}
          text={benifitText1}
          image={cardImg1}
        />
        <BenifitsCard
          heading={benifitHeading2}
          text={benifitText2}
          image={cardImg2}
        />
        <BenifitsCard
          heading={benifitHeading3}
          text={benifitText3}
          image={cardImg3}
        />
        <BenifitsCard
          heading={benifitHeading4}
          text={benifitText4}
          image={cardImg4}
        />
      </div>
    </div>
  );
};

export default AcademiaBenifits;
