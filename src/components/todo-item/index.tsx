import React, { FC } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

interface ITodoItem {
  title: string;
  id: number;
}

const TodoItem: FC<ITodoItem> = ({ title, id }) => {
  const { setTodo } = useData();

  if (!setTodo) return null;

  return (
    <li className={style.todoItem} onClick={() => setTodo(id)}>
      <h2>{title}</h2>
    </li>
  );
};

export default TodoItem;
