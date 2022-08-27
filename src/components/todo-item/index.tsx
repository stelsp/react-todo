import React, { FC } from 'react';
import { useData } from '../../context/context';
import { ITodo } from '../../context/types';

import style from './style.module.scss';

interface ITodoItem {
  el: ITodo;
}

const TodoItem: FC<ITodoItem> = ({ el }) => {
  const { handleDeleteClick, handleSetCurrentTodo, currentTodo } = useData()!;

  if (!currentTodo)
    return (
      <li className={style.todoItem}>
        <span onClick={() => handleDeleteClick(el.id)}>X</span>
        <h2
          onClick={() => handleSetCurrentTodo(el.id)}
          style={
            el.status === 'waiting'
              ? { color: 'black' }
              : el.status === 'inprocess'
              ? { color: '#364fc7' }
              : el.status === 'done'
              ? { color: '#5c940d' }
              : { color: 'black' }
          }
        >
          {el.title}
          <span>{el.body}</span>
        </h2>
      </li>
    );

  return (
    <li
      className={style.todoItem}
      style={currentTodo.id === el.id ? { opacity: '0.5' } : { backgroundColor: '' }}
    >
      <span onClick={() => handleDeleteClick(el.id)}>X</span>
      <h2
        onClick={() => handleSetCurrentTodo(el.id)}
        style={
          el.status === 'waiting'
            ? { color: 'black' }
            : el.status === 'inprocess'
            ? { color: '#364fc7' }
            : el.status === 'done'
            ? { color: '#5c940d' }
            : { color: 'black' }
        }
      >
        {el.title}
        <span>{el.body}</span>
      </h2>
    </li>
  );
};

export default TodoItem;
