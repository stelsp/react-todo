import React, { createContext, FC, useContext, useState } from 'react';

interface ITodo {
  title: string;
  body: string;
  id: number;
}
interface IData {
  todos?: ITodo[];
  setTodos?: React.Dispatch<React.SetStateAction<ITodo[]>>;
  addTodo?: () => void;
  deleteTodo?: (id: number) => void;
  currentTodo?: ITodo;
  setCurrentTodo?: React.Dispatch<React.SetStateAction<ITodo>>;
  setTodo?: (id: number) => void;
}
interface IDataProvider {
  children: React.ReactNode;
}

const Data = createContext<IData>({});

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([{ title: 'title112', body: 'body112', id: 21 }]);
  const [currentTodo, setCurrentTodo] = useState<ITodo>();

  const createTodo = () => {
    return {
      title: 'test',
      body: 'test',
      id: Date.now()
    };
  };

  const addTodo = () => {
    setTodos([createTodo(), ...todos]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const setTodo = (id: number) => {
    setCurrentTodo(todos.find((el) => el.id === id));
  };

  return (
    <Data.Provider value={{ todos, addTodo, deleteTodo, currentTodo, setTodo }}>
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
