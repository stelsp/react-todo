import React, { FC } from 'react';
import TodoItem from '../todo-item';

import style from './style.module.scss';

const TodoList: FC = () => {
  return (
    <ul className={style.todoList}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoList;
