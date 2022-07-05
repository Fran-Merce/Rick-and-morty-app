import React, { Children, createContext } from 'react';
import { useReducer } from 'react';
import { filterReducer } from '../reducer/filterReducer';

export const mainContext = createContext();

const initialState = {
  apiQuerys: {
    pageNumber: 1,
    gender: '',
    search: '',
    status: '',
    species: '',
  },
};

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const data = { state, dispatch };

  return <mainContext.Provider value={data}>{children}</mainContext.Provider>;
};
