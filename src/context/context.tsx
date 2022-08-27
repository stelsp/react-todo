import React, { createContext, FC, FormEventHandler, useContext, useState } from 'react';
import { IData, IDataProvider, ITodo } from './types';
import useSavedTodosHook from './useSavedTodosHook';

const Data = createContext<IData | null>(null);

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { todos, setTodos } = useSavedTodosHook();
  const [currentTodo, setCurrentTodo] = useState<ITodo>(todos[0]);

  const createTodo = () => {
    return {
      title: 'new todo',
      body: '',
      id: Date.now(),
      status: 'waiting'
    };
  };
  const handleAddFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos([createTodo(), ...todos]);
  };

  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleSetCurrentTodo = (id: number) => {
    const todo = todos.find((el) => el.id === id);
    if (!todo) return null;
    setCurrentTodo(todo);
  };

  const handleEditTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  const handleEditBodyChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCurrentTodo({ ...currentTodo, body: e.target.value });
  };

  const handleEditSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos(todos.map((el) => (el.id === currentTodo?.id ? currentTodo : el)));
  };

  const handleStatusChange = (status: string) => {
    setCurrentTodo({ ...currentTodo, status });
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
        handleEditSubmit,
        handleStatusChange
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
