import { Link } from "react-router-dom";
const HeroButton = ({
  title,
  isAuthorised,
  isContractOwner,
}: {
  title: string;
  isAuthorised: boolean;
  isContractOwner: boolean;
}) => {
  return (
    <div>
      {isContractOwner ? (
        <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
          {title}
        </button>
      ) : isAuthorised ? (
        <Link to="/academia/upload-student-data">
          <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
            {title}
          </button>
        </Link>
      ) : (
        <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
          {title}
        </button>
      )}
      {/* {isAuthorised ? (
        <Link to="/academia/upload-student-data">
          <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
            {title}
          </button>
        </Link>
      ) : (
        <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
          {title}
        </button>
      )} */}
    </div>
  );
};

export default HeroButton;
