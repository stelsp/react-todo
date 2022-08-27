import { useState, useEffect } from 'react';
import { ITodo } from './types';

const useSavedTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [currentTodo, setCurrentTodo] = useState<ITodo>({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos, currentTodo, setCurrentTodo };
};

export default useSavedTodos;
