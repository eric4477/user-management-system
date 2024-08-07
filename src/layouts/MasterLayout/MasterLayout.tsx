import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

function MasterLayout() {
  return (
    <div className="flex">
      <div>
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
