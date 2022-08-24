import React, { FC } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const AddTodo: FC = () => {
  const { addTodo } = useData();

  if (!addTodo) return null;

  return (
    <header className={style.addTodo__header}>
      <button className={style.addTodo__button} onClick={() => addTodo()}>
        new
      </button>
    </header>
  );
};

export default AddTodo;
