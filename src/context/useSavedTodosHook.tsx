import { useState, useEffect } from 'react';
import { ITodo } from './types';

const useSavedTodosHook = () => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos };
};

export default useSavedTodosHook;
