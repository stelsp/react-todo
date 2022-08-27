import React, { FC } from 'react';
import { useData } from '../../context/context';
import TodoItem from '../todo-item';

import style from './style.module.scss';

const TodoList: FC = () => {
  const { todos } = useData()!;

  return (
    <ul className={style.todoList}>
      {todos.map((el) => (
        <TodoItem el={el} key={el.id} />
      ))}
    </ul>
  );
};

export default TodoList;
