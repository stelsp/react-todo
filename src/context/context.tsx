import React, { createContext, FC, useContext, useState } from 'react';

interface IData {
  test?: string;
  setTest?: React.Dispatch<React.SetStateAction<string>>;
}

interface IDataProvider {
  children: React.ReactNode;
}

const Data = createContext<IData>({});

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const [test, setTest] = useState('test');

  return <Data.Provider value={{ test, setTest }}>{children}</Data.Provider>;
};

export default DataProvider;
