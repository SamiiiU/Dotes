// DataContext.js
import React, { createContext , useReducer,  } from 'react';
import Modifier from './Modifier';

const initialstate = {
    data : [
        {
            id : 1,
            title: "Text",
            description: "Any text you want",
        }
    ]
}

// Create a context
export const DataContext = createContext(initialstate);


const DataProvider = ({ children }) => {
    const[state , dispatch ] = useReducer(Modifier , initialstate);

    function Delete(id){
        dispatch({
            type : "DELETE",
            payload : id,
        });
    }

    function Add(dota){
        dispatch({
            type : "ADD",
            payload : dota,
        });
    }

    function Update(id){
        dispatch({
            type : "UPDATE",
            payload : id
        });
    }
    

  

  
  return (
    <DataContext.Provider value={{ 
        data : state.data,
        Delete ,
        Add ,
        Update
     }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
