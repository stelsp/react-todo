import React, { FC } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoStatus: FC = () => {
  return (
    <div>
      <span>waiting</span>
      <span>in process</span>
      <span>dpne</span>
    </div>
  );
};

const TodoHeader: FC = () => {
  const { handleEditTitleChange, handleEditSubmit, currentTodo } = useData();

  return (
    <form className={style.todoEdit__header} onSubmit={handleEditSubmit} onBlur={handleEditSubmit}>
      <input
        type="text"
        placeholder="введите название"
        value={currentTodo.title}
        onChange={handleEditTitleChange}
      />
    </form>
  );
};

const TodoBody: FC = () => {
  const { handleEditBodyChange, handleEditSubmit, currentTodo } = useData();

  return (
    <form className={style.todoEdit__body} onSubmit={handleEditSubmit} onBlur={handleEditSubmit}>
      <textarea
        placeholder="а тут текст"
        value={currentTodo.body}
        onChange={handleEditBodyChange}
      />
    </form>
  );
};

const TodoEdit: FC = () => {
  return (
    <div className={style.todoEdit}>
      <TodoHeader />
      <TodoBody />
    </div>
  );
};

export default TodoEdit;
