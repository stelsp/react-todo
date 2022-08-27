import React, { FC } from 'react';
import { useData } from '../../context/context';
import TodoItem from '../todo-item';

import style from './style.module.scss';

const TodoList: FC = () => {
  const { todos } = useData();
  console.log(todos);

  return (
    <ul className={style.todoList}>
      {todos.map((el: any) => (
        <TodoItem el={el} key={el.id} />
      ))}
    </ul>
  );
};

export default TodoList;
