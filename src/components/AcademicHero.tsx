import HeroButton from "./HeroButton";

interface props {
  image: string;
  title: string;
  text: string;
  buttonName: string;
  isAuthorised: boolean;
}

const AcademicHero = ({
  image,
  title,
  text,
  buttonName,
  isAuthorised,
}: props) => {
  return (
    <div className="flex justify-center gap-44 p-14 academic-gradient whitespace-pre-line">
      <div>
        {/* hero image */}
        <img src={image} alt="" />
      </div>
      <div>
        {/* hero text */}
        <h1 className="text-4xl font-bold mt-20">{title}</h1>
        <p className="text-xl font-light mt-5">{text}</p>
        <div>
          <HeroButton isAuthorised={isAuthorised} title={buttonName} />
        </div>
      </div>
    </div>
  );
};

export default AcademicHero;
