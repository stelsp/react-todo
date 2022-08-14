import React, { createContext, FC, useContext, useState } from 'react';

interface IData {
  test?: string;
}

const Data = createContext<IData>({});

export const useData = () => {
  return useContext(Data);
};

interface IDataProvider {
  children: React.ReactNode;
}

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const [data] = useState({ test: 'Hello' });

  return <Data.Provider value={data}>{children}</Data.Provider>;
};

export default DataProvider;
