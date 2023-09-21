import HeroButton from "./HeroButton";

interface props {
  image: string;
  title: string;
  text: string;
  buttonName: string;
}

const AcademicHero = ({ image, title, text, buttonName }: props) => {
  return (
    <div className="flex justify-center academic-gradient whitespace-pre-line">
      <div>
        {/* hero image */}
        <img src={image} alt="" />
      </div>
      <div>
        {/* hero text */}
        <h1 className="text-4xl font-bold mt-20">{title}</h1>
        <p className="text-xl font-light mt-5">{text}</p>
        <div>
          <HeroButton title={buttonName} />
        </div>
      </div>
    </div>
  );
};

export default AcademicHero;
