// DataContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import Modifier from './Modifier';

const initialstate = {
    data: JSON.parse(localStorage.getItem('data')) || [
        {
            id: 1,
            title: "Text",
            description: "Any text you want",
            password: "234532",
        }
    ]
};

// Create a context
export const DataContext = createContext(initialstate);

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Modifier, initialstate);

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (storedData) {
            dispatch({ type: 'LOAD', payload: storedData });
        }
    }, []);

    const Delete = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    };

    const Add = (dota) => {
        dispatch({
            type: 'ADD',
            payload: dota,
        });
    };

    const Update = (updatedData) => {
        dispatch({
            type: 'UPDATE',
            payload: updatedData,
        });
    };

    return (
        <DataContext.Provider value={{ 
            data: state.data,
            Delete,
            Add,
            Update
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
