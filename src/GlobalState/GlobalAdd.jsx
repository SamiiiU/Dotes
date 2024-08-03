import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Close = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  };

    const [title , setTitle] = useState("New Dote.....");
    const [description , setDescription] = useState("");
    const [isNew , setIsNew] = useState(false);
    const [editID , setId] = useState(1);
    const [password , setPassword] = useState("");

    


  return (
    <AppContext.Provider value={{password , setPassword, editID , setId, isOpen , setIsOpen, isNew , setIsNew , Close , title , setTitle , description , setDescription }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;