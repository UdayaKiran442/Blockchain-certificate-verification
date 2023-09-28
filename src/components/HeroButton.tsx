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
        <Link to="/owner/assign-registrar">
          <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
            {title}
          </button>
        </Link>
      ) : isAuthorised ? (
        <Link to="/academia/upload-student-data">
          <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
            {title}
          </button>
        </Link>
      ) : (
        <Link to="/verify/credentials">
          <button className="text-white bg-primaryBlue rounded-full mt-7 py-3 px-6 ">
            {title}
          </button>
        </Link>
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
