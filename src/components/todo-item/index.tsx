import React, { FC } from 'react';

import style from './style.module.scss';

interface ITodoItem {
  title: string;
}

const TodoItem: FC<ITodoItem> = ({ title }) => {
  return (
    <li className={style.todoItem}>
      <h2>{title}</h2>
    </li>
  );
};

export default TodoItem;
