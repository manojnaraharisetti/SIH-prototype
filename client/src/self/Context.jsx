import { useState, createContext, useContext } from 'react';

const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
 
  const [username, setUsername] = useState("");

  const updateUsername = (newId) => {
    setUsername(newId);
  };

  return (
    <CustomContext.Provider
      value={{
        username,
        updateUsername,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useCustomContext = () => {
  return useContext(CustomContext);
};