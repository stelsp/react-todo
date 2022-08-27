import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { IData, IDataProvider, ITodo } from './types';
import useSavedTodosHook from './useSavedTodosHook';

const Data = createContext<IData | null>(null);

export const useData = () => {
  return useContext(Data);
};

const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { todos, setTodos } = useSavedTodosHook();
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const [filterInput, setFilterInput] = useState('');

  const handleFilterInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setFilterInput(lowerCase);
  };

  useEffect(() => {
    if (todos.length === 0) {
      setCurrentTodo(null);
    }
    if (todos.length === 1) {
      setCurrentTodo(todos[0]);
    }
  }, [todos]);

  const createTodo = () => {
    return {
      title: 'new todo',
      body: '',
      id: Date.now(),
      status: 'waiting'
    };
  };

  const handleAddFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos([createTodo(), ...todos]);
    setFilterInput('');
  };

  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
    setCurrentTodo(todos[-1]);
  };

  const handleSetCurrentTodo = (id: number) => {
    const todo = todos.find((el) => el.id === id);
    if (!todo) return null;
    setCurrentTodo(todo);
  };

  const handleEditTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!currentTodo) return null;
    setCurrentTodo({ ...currentTodo, title: e.target.value });
  };

  const handleEditBodyChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (!currentTodo) return null;
    setCurrentTodo({ ...currentTodo, body: e.target.value });
  };

  const handleStatusChange = (status: string) => {
    if (!currentTodo) return null;
    setCurrentTodo({ ...currentTodo, status });
  };

  const handleEditSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos(todos.map((el) => (el.id === currentTodo?.id ? currentTodo : el)));
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
        handleStatusChange,
        filterInput,
        handleFilterInput
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
