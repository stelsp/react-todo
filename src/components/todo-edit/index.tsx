import React, { FC, useState } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoHeader: FC = () => {
  const { currentTodo } = useData();

  const [EditTitle, setEditTitle] = useState(false);

  if (!currentTodo) return null;

  return (
    <header className={style.todoEdit__header}>
      {EditTitle && <input type="text" placeholder="title input" />}
      {!EditTitle && <h2 onClick={() => setEditTitle(!EditTitle)}>{currentTodo.title}</h2>}
    </header>
  );
};

const TodoBody: FC = () => {
  const { currentTodo } = useData();
  const [EditBody, setEditBody] = useState(false);

  if (!currentTodo) return null;

  return (
    <div className={style.todoEdit__body}>
      {EditBody && <textarea placeholder="body input" />}
      {!EditBody && <p onClick={() => setEditBody(!EditBody)}>{currentTodo.body}</p>}
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
