import React, { createContext, useReducer, useEffect } from 'react';
import Modifier from './Modifier';

const initialState = {
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
export const DataContext = createContext(initialState);

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Modifier, initialState);

    useEffect(() => {
        // Update local storage whenever state changes
        localStorage.setItem('data', JSON.stringify(state.data));
    }, [state.data]);

    const Delete = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    };

    const Add = (data) => {
        dispatch({
            type: 'ADD',
            payload: data,
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
            Add,
            Update,
            Delete
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
