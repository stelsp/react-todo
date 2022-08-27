import React, { FC } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const AddTodo: FC = () => {
  const { handleAddFormSubmit } = useData()!;

  return (
    <form className={style.addTodo} onSubmit={handleAddFormSubmit}>
      <button type="submit" className={style.addTodo__button}>
        new
      </button>
    </form>
  );
};

export default AddTodo;
