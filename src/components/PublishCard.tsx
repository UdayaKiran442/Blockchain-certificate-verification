interface props {
  title: string;
  text: string;
  img: string;
}

const PublishCard = ({ img, title, text }: props) => {
  return (
    <div>
      <div className="w-[18.75rem] h-[12.5rem] border-2 bg-secondaryWhite rounded-2xl p-3 ">
        <center>
          <img src={img} alt="" width={50} height={50} />
          <h4 className="text-primaryBlue text-lg font-medium">{title}</h4>
          <p>{text}</p>
        </center>
      </div>
    </div>
  );
};

export default PublishCard;
