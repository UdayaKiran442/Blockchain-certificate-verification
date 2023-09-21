interface props {
  heading: string;
  text: string;
  image: string;
}

const BenifitsCard = ({ heading, text, image }: props) => {
  return (
    <div className="bg-white border-2 rounded-2xl p-5 w-[250px] h-[250px]">
      <div>
        {/* benifit image */}
        <img src={image} alt="" width={50} height={50} />
      </div>
      <div className="mt-5">
        {/* benifit heading */}
        <h3 className="font-medium">{heading}</h3>
      </div>
      <div className="mt-5">
        {/* benifit desc */}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BenifitsCard;
