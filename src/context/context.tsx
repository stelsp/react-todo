import React, { createContext, FC, useContext } from 'react';
import { IDataProvider } from './types';
import useSavedTodos from './useSavedTodos';

const Data = createContext<any>({});

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { todos, setTodos, currentTodo, setCurrentTodo } = useSavedTodos();

  const createTodo = () => {
    return {
      title: 'new todo',
      body: '',
      id: Date.now()
    };
  };
  const handleAddFormSubmit = (e: any) => {
    e.preventDefault();
    setTodos([createTodo(), ...todos]);
  };

  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((el: any) => el.id !== id));
  };

  const handleSetCurrentTodo = (id: number) => {
    setCurrentTodo(todos.find((el: any) => el.id === id));
  };

  const handleEditTitleChange = (e: any) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  const handleEditBodyChange = (e: any) => {
    setCurrentTodo({ ...currentTodo, body: e.target.value });
  };

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    setTodos(todos.map((el: any) => (el.id === currentTodo?.id ? currentTodo : el)));
  };

  return (
    <Data.Provider
      value={{
        todos,
        currentTodo,
        handleAddFormSubmit,
        handleDeleteClick,
        handleSetCurrentTodo,
        handleEditTitleChange,
        handleEditBodyChange,
        handleEditSubmit
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
