import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";

function SideBar() {
  const navigate = useNavigate();
  const { isCollapsed, logedInUser } = useContext(StoreContext);

  return (
    <div className="bg-[#F2EAE1] sidebar-container h-screen">
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
                src={logedInUser?.image}
                alt="profile image"
              />
            </div>
            <h3 className="text-[17px] mb-1">
              {logedInUser?.firstName} {logedInUser?.lastName}
            </h3>
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
            {isCollapsed ? "" : "Add User"}
          </MenuItem>
          <MenuItem
            className={`${isCollapsed ? "flex flex-row justify-center" : ""}`}
            icon={<IoPerson className="text-[25px]" />}
            component={<Link to="/dashboard/profile" />}
          >
            {isCollapsed ? "" : "Profile"}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="logout absolute bottom-6 gap-4 w-full flex items-center justify-center ">
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium flex items-center justify-center gap-3"
        >
          {!isCollapsed ? "Logout" : ""}{" "}
          <MdExitToApp
            className={`${isCollapsed ? "text-[22px]" : ""} text-[17px]`}
          />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
