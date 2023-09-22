import { AiOutlineArrowRight } from "react-icons/ai";

import SectionHeadings from "./SectionHeadings";
import PublishCard from "./PublishCard";

interface props {
  title: string;
  cardImg1: string;
  cardImg2: string;
  cardImg3: string;
  card1Title: string;
  card1Text: string;
  card2Title: string;
  card2Text: string;
  card3Title: string;
  card3Text: string;
}

const HowToPublish = ({
  title,
  cardImg1,
  cardImg2,
  cardImg3,
  card1Title,
  card1Text,
  card2Title,
  card2Text,
  card3Title,
  card3Text,
}: props) => {
  return (
    <div className="p-10">
      <div>
        {/* section heading */}
        <SectionHeadings heading={title} textCenter="text-center" />
      </div>
      <div className="p-5 flex items-center justify-around">
        {/* steps to publish */}
        <PublishCard img={cardImg1} text={card1Text} title={card1Title} />
        <AiOutlineArrowRight />
        <PublishCard img={cardImg2} text={card2Text} title={card2Title} />
        <AiOutlineArrowRight />
        <PublishCard img={cardImg3} text={card3Text} title={card3Title} />
      </div>
    </div>
  );
};

export default HowToPublish;
