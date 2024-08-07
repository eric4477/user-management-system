import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import porfileImg from "../assets/images/profile.jpg";
import { MdExitToApp } from "react-icons/md";
import { useState } from "react";

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-[#F2EAE1] sidebar-container h-screen relative flex">
      <Sidebar collapsed={isCollapsed} className="bg-[#F2EAE1] ">
        <div
          className={`title flex items-center ${
            isCollapsed ? "pl-2" : "pl-4"
          } pt-4 gap-2`}
        >
          <div className="pipeline w-[5px] h-[30px] bg-[#F8D442]"></div>
          <h4 className="text-lg font-bold">UMS</h4>
        </div>
        {!isCollapsed && (
          <div className="sidebar-profile flex flex-col items-center justify-center font-bold bg-[#F2EAE1]">
            <div className="profile-img inline-block mb-4 mt-8">
              <img
                className="w-[120px] h-[120px] object-cover rounded-full"
                src={porfileImg}
                alt="profile"
              />
            </div>
            <h3 className="text-[17px] mb-1">Karthi Madesh</h3>
            <p className="text-sm text-[#FEAF00] font-medium">Admin</p>
          </div>
        )}
        <Menu className="font-[500] flex flex-col items-center mt-10">
          <MenuItem
            className={`${isCollapsed ? "flex flex-row justify-center" : ""}`}
            icon={<AiOutlineHome className="text-[25px]" />}
            component={<Link to="/dashboard/home" />}
          >
            {isCollapsed ? "" : "Home"}
          </MenuItem>
          <MenuItem
            className={`${isCollapsed ? "flex flex-row justify-center" : ""}`}
            icon={<FaRegBookmark className="text-[20px]" />}
            component={<Link to="/dashboard/users" />}
          >
            {isCollapsed ? "" : "Users"}
          </MenuItem>
          <MenuItem
            className={`${isCollapsed ? "flex flex-row justify-center" : ""}`}
            icon={<FaGraduationCap className="text-[25px]" />}
            component={<Link to="/dashboard/userdata" />}
          >
            {isCollapsed ? "" : "User Data"}
          </MenuItem>
          <MenuItem
            className={`${isCollapsed ? "flex flex-row justify-center" : ""}`}
            icon={<IoPerson className="text-[25px]" />}
            component={<Link to="/dashboard/profile" />}
          >
            {isCollapsed ? "" : "Profile"}
          </MenuItem>
        </Menu>
        <div className="logout flex flex-row items-center justify-center absolute bottom-6 gap-4 w-full ">
          <button className="text-sm font-medium">Logout</button>
          {!isCollapsed && <MdExitToApp className="text-[17]" />}
        </div>
      </Sidebar>
    </div>
  );
}

export default SideBar;
