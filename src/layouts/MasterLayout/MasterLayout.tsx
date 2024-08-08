import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { MdExitToApp } from "react-icons/md";

function MasterLayout() {
  return (
    <div className="flex overflow-x-auto">
      <div className="bg-[#f2eae1] relative">
        <SideBar />
      </div>
      <div className="w-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default MasterLayout;
