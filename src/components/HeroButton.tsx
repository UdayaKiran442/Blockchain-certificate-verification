const HeroButton = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
        {title}
      </button>
    </div>
  );
};

export default HeroButton;
