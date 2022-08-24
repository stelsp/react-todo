import React, { FC, useState } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoHeader: FC = () => {
  const { currentTodo } = useData();
  const [state, setState] = useState('');

  if (!currentTodo) return null;

  return (
    <header className={style.todoEdit__header}>
      <input
        type="text"
        placeholder="введите название"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </header>
  );
};

const TodoBody: FC = () => {
  const { currentTodo } = useData();
  const [state, setState] = useState('');

  if (!currentTodo) return null;

  return (
    <div className={style.todoEdit__body}>
      <textarea
        placeholder="а тут текст"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
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
