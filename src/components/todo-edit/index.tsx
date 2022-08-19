import React, { FC, useState } from 'react';
import { useData } from '../../context/context';

import style from './style.module.scss';

const TodoTitleInput: FC = () => {
  return <input type="text" placeholder="title input" />;
};
const TodoTitle: FC<{ title: string }> = ({ title }) => {
  return <h2>{title}</h2>;
};

const TodoBodyInput: FC = () => {
  return <textarea placeholder="body input" />;
};
const TodoBody: FC<{ body: string }> = ({ body }) => {
  return <p>{body}</p>;
};

const TodoEdit: FC = () => {
  const [EditTitle, setEditTitle] = useState(false);
  const [EditBody, setEditBody] = useState(false);

  const { currentTodo } = useData();

  if (!currentTodo) return null;

  return (
    <div className={style.todoEdit}>
      <div className={style.title}>
        <button onClick={() => setEditTitle(!EditTitle)}>ET</button>
        {EditTitle && <TodoTitleInput />}
        {!EditTitle && <TodoTitle title={currentTodo.title} />}
      </div>

      <div className={style.todoEdit__divider} />

      <div className={style.body}>
        <button onClick={() => setEditBody(!EditBody)}>EB</button>
        {EditBody && <TodoBodyInput />}
        {!EditBody && <TodoBody body={currentTodo.body} />}
      </div>
    </div>
  );
};

export default TodoEdit;
