import { Link } from "react-router-dom";
const HeroButton = ({
  title,
  isAuthorised,
}: {
  title: string;
  isAuthorised: boolean;
}) => {
  return (
    <div>
      {isAuthorised ? (
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
    </div>
  );
};

export default HeroButton;
