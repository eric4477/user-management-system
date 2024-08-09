import { useContext } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { StoreContext } from "../context/StoreContext";

function NavBar() {
  const { isCollapsed, toggleCollapse } = useContext(StoreContext);
  return (
    <nav className="flex items-center justify-between py-3 px-4">
      <button className="sidebar-collapse-btn flex items-center justify-center">
        {!isCollapsed ? (
          <IoMdArrowDropleftCircle
            onClick={toggleCollapse}
            className="text-[26px] text-[#C4C4C4]"
          />
        ) : (
          <IoMdArrowDroprightCircle
            onClick={toggleCollapse}
            className="text-[26px] text-[#C4C4C4]"
          />
        )}
      </button>
      <div className="flex items-center justify-end gap-6 max-[600px]:gap-2">
        <div className="relative input-container inline-block w-[220px] ">
          <input
            type="text"
            placeholder="Search..."
            className="border w-full border-[#E5E5E5] outline-none rounded-md 
            placeholder:text-sm pl-4 pr-10 py-[5px] max-[600px]:hidden"
          />
          <IoSearchOutline
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C4C4C4]
           max-[600px]:text-[22px]"
          />
        </div>
        <IoNotificationsOutline className="text-[22px] text-[#C4C4C4]" />
      </div>
    </nav>
  );
}
export default NavBar;
