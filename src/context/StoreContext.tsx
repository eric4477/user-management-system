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

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
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
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
