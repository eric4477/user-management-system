import { createContext, useState, ReactNode } from "react";
import { StoreContextTypes } from "../intefaces/storeContext";

export const StoreContext = createContext<StoreContextTypes>({
  isCollapsed: false,
  toggleCollapse: () => {},
});

const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const contextValue: StoreContextTypes = {
    isCollapsed,
    toggleCollapse,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
