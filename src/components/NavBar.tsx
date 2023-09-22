import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="fixed w-full">
      <div className="flex justify-between p-2 bg-[#fbfbfb] shadow-md">
        {/* logo */}
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primaryBlue" : "")}
          >
            <img src={logo} alt="" width={250} height={250} />
          </NavLink>
        </div>
        {/* navlinks */}
        <div className="flex gap-8 items-center">
          <ul>
            <li>
              <NavLink
                to="/academia"
                className={({ isActive }) =>
                  isActive ? "text-primaryBlue" : ""
                }
              >
                Academia
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/student"
                className={({ isActive }) =>
                  isActive ? "text-primaryBlue" : ""
                }
              >
                Student
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/verifier"
                className={({ isActive }) =>
                  isActive ? "text-primaryBlue" : ""
                }
              >
                Verifier
              </NavLink>
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
