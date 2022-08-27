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
        <button onClick={() => handleDeleteClick(el.id)}>&#9746;</button>
        <div className={style.todoItem__text} onClick={() => handleSetCurrentTodo(el.id)}>
          <h3
            className={
              el.status === 'inprocess'
                ? style.todoItem_inprocess
                : el.status === 'done'
                ? style.todoItem_done
                : style.todoItem_waiting
            }
          >
            {el.title === '' ? 'new todo' : el.title}
            <p>{el.body}</p>
          </h3>
        </div>
      </li>
    );

  return (
    <li
      className={style.todoItem}
      style={currentTodo.id === el.id ? { opacity: '0.5', borderBottom: '1px solid black' } : {}}
    >
      <button onClick={() => handleDeleteClick(el.id)}>&#9746;</button>
      <div className={style.todoItem__text} onClick={() => handleSetCurrentTodo(el.id)}>
        <h3
          className={
            el.status === 'inprocess'
              ? style.todoItem_inprocess
              : el.status === 'done'
              ? style.todoItem_done
              : style.todoItem_waiting
          }
        >
          {el.title === '' ? 'введите название' : el.title}

          <p>{el.body}</p>
        </h3>
      </div>
    </li>
  );
};

export default TodoItem;
