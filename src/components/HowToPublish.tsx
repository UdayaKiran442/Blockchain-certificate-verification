import { AiOutlineArrowRight } from "react-icons/ai";

import SectionHeadings from "./SectionHeadings";
import PublishCard from "./PublishCard";

interface props {
  title: string;
  register: string;
  fill: string;
  publish: string;
  card1Title: string;
  card1Text: string;
  card2Title: string;
  card2Text: string;
  card3Title: string;
  card3Text: string;
}

const HowToPublish = ({
  title,
  register,
  fill,
  publish,
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
        <PublishCard img={register} text={card1Text} title={card1Title} />
        <AiOutlineArrowRight />
        <PublishCard img={fill} text={card2Text} title={card2Title} />
        <AiOutlineArrowRight />
        <PublishCard img={publish} text={card3Text} title={card3Title} />
      </div>
    </div>
  );
};

export default HowToPublish;
