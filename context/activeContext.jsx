import { createContext, useContext, useState } from "react";

const ActiveContext = createContext();

export const ActiveProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Residential");
  return (
    <ActiveContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  return useContext(ActiveContext);
};
