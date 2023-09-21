import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="fixed w-full">
      <div className="flex justify-between p-2 bg-[#fbfbfb] shadow-md">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="" width={250} height={250} />
          </Link>
        </div>
        {/* navlinks */}
        <div className="flex gap-8 items-center">
          <ul>
            <li>
              <Link to="/academia">Academia</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/student">Student</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/verifier">Verifier</Link>
            </li>
          </ul>
          <ul>
            <button className="text-blue-500 border border-solid border-blue-500 rounded-xl">
              <p className="p-1">Connect to metamask</p>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
