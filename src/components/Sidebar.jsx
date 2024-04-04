import logo from "../assets/images/logo.png";
import { navLink } from "./dummy";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Modal from "./Modal";

const Sidebar = ({children}) => {
  const [visible, setVisible] = useState(false);

  //Toggle menu on small screen
  const handleVisible = () =>{
    setVisible((prev) =>!prev);
  }
  return (
    <div className='w-full h-full flex lg:flex-row sm:flex-col'>
   
      <div className="desktopView hidden lg:flex border-r-4 border-neutral-50 h-screen w-[20%] overflow-y-scroll scroll-mx-1">
        <div className="menuItems mx-5 my-8 ">
          <div className="logo flex items-center">
            <img src={logo} alt="MyMedicare" className="w-12"/>
            <h2 className="text-xl font-bold text-primary-100">MyMedicare</h2>
          </div>
          <div className="navigation mt-10">
            {
              navLink.map((item, id) =>(
                <div key={id} className={`py-4 ${item.gap == true ? "mt-20": null}`}>
                  <NavLink to={item.path} className={"flex flex-row space-x-2 focus:text-primary-100 text-neutral-50 capitalize text-lg font-medium hover:text-primary-100"}>
                    <p>{item.icon}</p>
                    <p>{item.title}</p>
                  </NavLink>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="mobileView flex flex-col lg:hidden my-4">
        <div className="flex flex-row items-center justify-between mx-2">
          <div className="logo flex items-center">
            <img src={logo} alt="MyMedicare" className="w-12"/>
            <h2 className="text-xl font-bold text-primary-100">MyMedicare</h2>
          </div>
          <CiMenuBurger onClick={handleVisible} size={25} className="text-primary-100 font-bold"/>
        </div>

        <div className="menu">
          {
            visible && 
            <Modal visible={visible}>
              <div className="fixed top-0 left-0 menuItem bg-white w-[70%] h-full">
                <div className="navigation my-8 mx-5">
                  {
                    navLink.map((item, id) =>(
                      <div key={id} className={`py-2 border-b-2 border-primary-100 ${item.gap == true ? "mt-16": null}`}>
                        <NavLink onClick={handleVisible} to={item.path} className={"flex flex-row space-x-2 active:text-primary-100 text-neutral-50 capitalize text-lg font-medium hover:text-primary-100"}>
                          <p>{item.icon}</p>
                          <p>{item.title}</p>
                        </NavLink>
                      </div>
                    ))
                  }
                </div>
              </div>
            </Modal>
          }
        </div>
      </div>
    
      <div className="children sm:mt-20 lg:mt-0 sm:mx-5 lg:mx-0 h-screen bg-neutral-50 w-full">
        {children}
      </div>
    </div>
  )
}

export default Sidebar
