import { createContext, useState, ReactNode, useEffect } from "react";
import { StoreContextTypes } from "../intefaces/storeContext";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { User } from "../intefaces/user";

export const StoreContext = createContext<StoreContextTypes>({
  isCollapsed: false,
  toggleCollapse: () => {},
  saveUserData: () => {},
  logedInUser: null,
  setLogedInUser: () => {},
});

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [logedInUser, setLogedInUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
    setLoading(false);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    if (encodedToken) {
      const decodedToken = jwtDecode<JwtPayload & User>(encodedToken);
      setLogedInUser(decodedToken as User);
    }
  };

  const contextValue: StoreContextTypes = {
    isCollapsed,
    toggleCollapse,
    saveUserData,
    logedInUser,
    setLogedInUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
