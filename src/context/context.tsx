import React, { createContext, FC, useContext, useState } from 'react';

interface ITodo {
  title: string;
  body: string;
  id: number;
}
interface IData {
  todos?: ITodo[];
  setTodos?: React.Dispatch<React.SetStateAction<ITodo[]>>;
  addTodo?: (title: string, body: string, id: number) => void;
  deleteTodo?: (id: number) => void;
}

interface IDataProvider {
  children: React.ReactNode;
}

const Data = createContext<IData>({});

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const createTodo = (title: string, body: string) => {
    return {
      title,
      body,
      id: Date.now()
    };
  };
  const addTodo = (title: string, body: string) => {
    setTodos([createTodo(title, body), ...todos]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return <Data.Provider value={{ todos, addTodo, deleteTodo }}>{children}</Data.Provider>;
};

export default DataProvider;
