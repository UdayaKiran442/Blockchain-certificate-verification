import { AiOutlineArrowRight } from "react-icons/ai";

import SectionHeadings from "./SectionHeadings";
import PublishCard from "./PublishCard";

import register from "../assets/Register.svg";
import fill from "../assets/Prepare and upload.svg";
import publish from "../assets/Publish.svg";

const HowToPublish = () => {
  return (
    <div className="p-10">
      <div>
        {/* section heading */}
        <SectionHeadings
          heading="How to start publishing"
          textCenter="text-center"
        />
      </div>
      <div className="p-5 flex items-center justify-around">
        {/* steps to publish */}
        <PublishCard
          img={register}
          text="Register your academic institution by connecting wallet to NAD"
          title="Register"
        />
        <AiOutlineArrowRight />
        <PublishCard
          img={fill}
          text="Fill the form with student details"
          title="Prepare and Upload"
        />
        <AiOutlineArrowRight />
        <PublishCard
          img={publish}
          text="Publish the certificates on Blockchain for student's access"
          title="Publish"
        />
      </div>
    </div>
  );
};

export default HowToPublish;
