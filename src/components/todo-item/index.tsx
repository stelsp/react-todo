import React, { FC } from 'react';
import { useData } from '../../context/context';
import { ITodo } from '../../context/types';

import style from './style.module.scss';

interface ITodoItem {
  el: ITodo;
}

const TodoItem: FC<ITodoItem> = ({ el }) => {
  const { handleDeleteClick, handleSetCurrentTodo, currentTodo } = useData();

  return (
    <li className={style.todoItem}>
      <span onClick={() => handleDeleteClick(el.id)}>X</span>
      <h2
        onClick={() => handleSetCurrentTodo(el.id)}
        style={currentTodo.id === el.id ? { color: 'green' } : { color: 'black' }}
      >
        {el.title}
        <span>{el.body}</span>
      </h2>
    </li>
  );
};

export default TodoItem;
