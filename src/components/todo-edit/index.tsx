import React, { FC } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoStatus: FC = () => {
  const { handleStatusChange, handleEditSubmit } = useData()!;

  return (
    <form className={style.todoEdit__status} onSubmit={handleEditSubmit} onBlur={handleEditSubmit}>
      <button
        className={style.todoEdit__statusButton_type_waiting}
        onClick={() => handleStatusChange('waiting')}
      >
        waiting
      </button>
      <button
        className={style.todoEdit__statusButton_type_inProcess}
        onClick={() => handleStatusChange('inprocess')}
      >
        in process
      </button>
      <button
        className={style.todoEdit__statusButton_type_done}
        onClick={() => handleStatusChange('done')}
      >
        done
      </button>
    </form>
  );
};

const TodoHeader: FC = () => {
  const { handleEditTitleChange, handleEditSubmit, currentTodo } = useData()!;

  if (!currentTodo) return null;

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
  const { handleEditBodyChange, handleEditSubmit, currentTodo } = useData()!;

  if (!currentTodo) return null;

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
  const { currentTodo } = useData()!;

  if (!currentTodo)
    return (
      <div className={style.todoEdit}>
        <p className={style.todoEdit__header}>ТЫКНИ НА ТУДУ</p>
      </div>
    );

  return (
    <div className={style.todoEdit}>
      <TodoStatus />
      <TodoHeader />
      <TodoBody />
    </div>
  );
};

export default TodoEdit;
