import logo from "../assets/images/logo.png";
import { navLink } from "./dummy";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";


const Sidebar = ({ children }) => {
  const [visible, setVisible] = useState(false);

  // Toggle menu on small screen
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Desktop View */}
      <div className="lg:flex hidden border-r-4 border-neutral-50 w-[20%] overflow-y-auto">
        <div className="custom-scrollbar-container h-full">
          <div className="menuItems mx-5 my-8">
            <div className="logo flex items-center">
              <img src={logo} alt="MyMedicare" className="w-12" />
              <h2 className="text-xl font-bold text-primary-100">MyMedicare</h2>
            </div>
            <div className="navigation mt-10">
              {navLink.map((item, id) => (
                <div key={id} className={`py-4 ${item.gap ? "mt-20" : ""}`}>
                  <NavLink
                    to={item.path}
                    className="flex flex-row space-x-2 focus:text-primary-100 text-neutral-50 capitalize text-lg font-medium hover:text-primary-100"
                  >
                    <p>{item.icon}</p>
                    <p>{item.title}</p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-neutral-50/50 lg:w-[80%] sm:w-full h-full overflow-auto">
        <div className="children sm:my-16 lg:my-32 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
