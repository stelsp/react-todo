import React, { FC } from 'react';
import { useData } from '../../context/context';
import TodoItem from '../todo-item';

import style from './style.module.scss';

const TodoList: FC = () => {
  const data = useData();

  if (!data) return null;

  return (
    <ul className={style.todoList}>
      {data.todos?.map((el) => (
        <TodoItem title={el.title} key={el.id} id={el.id} />
      ))}
    </ul>
  );
};

export default TodoList;
