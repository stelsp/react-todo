import React, { FC, useState } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoTitle: FC = () => {
  const { currentTodo } = useData();

  const [EditTitle, setEditTitle] = useState(false);

  if (!currentTodo) return null;

  return (
    <>
      {EditTitle && <input type="text" placeholder="title input" />}
      {!EditTitle && <h2 onClick={() => setEditTitle(!EditTitle)}>{currentTodo.title}</h2>}
    </>
  );
};

const TodoBody: FC = () => {
  const { currentTodo } = useData();
  const [EditBody, setEditBody] = useState(false);

  if (!currentTodo) return null;

  return (
    <>
      {EditBody && <textarea placeholder="body input" />}
      {!EditBody && <p onClick={() => setEditBody(!EditBody)}>{currentTodo.body}</p>}
    </>
  );
};

const TodoEdit: FC = () => {
  return (
    <div className={style.todoEdit}>
      <div className={style.todoEdit__title}>
        <TodoTitle />
      </div>

      <div className={style.todoEdit__divider} />

      <div className={style.todoEdit__body}>
        <TodoBody />
      </div>
    </div>
  );
};

export default TodoEdit;
