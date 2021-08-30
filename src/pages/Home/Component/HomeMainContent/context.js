import { createContext, useState, useContext } from "react";

export const SelectedCategoryContext = createContext();

export const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Begineer");
  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export const useSelectedCategory = () => {
  return useContext(SelectedCategoryContext);
};
