import academic from "../assets/academia.png";
import HeroButton from "./HeroButton";

const AcademicHero = () => {
  return (
    <div className="flex justify-center academic-gradient">
      <div>
        {/* hero image */}
        <img src={academic} alt="" />
      </div>
      <div>
        {/* hero text */}
        <h1 className="text-4xl font-bold mt-20">
          Let's Being Your Digital <br />
          Transformational Journey <br />
          Through Blockchain Based NAD <br />
        </h1>
        <p className="text-xl font-light mt-5">
          Now publish your student's academic <br /> awards easily!
        </p>
        <div>
          <HeroButton title="Connect to Wallet" />
        </div>
      </div>
    </div>
  );
};

export default AcademicHero;
