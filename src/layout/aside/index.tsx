import React, { FC } from 'react';
import TodoList from '../../components/todo-list';
import { useData } from '../../context/context';

import style from './style.module.scss';

const AddTodo: FC = () => {
  const { addTodo } = useData();

  if (!addTodo) return null;

  return (
    <header className={style.aside__header}>
      <button onClick={() => addTodo()}>new</button>
    </header>
  );
};

const Aside: FC = () => {
  return (
    <aside className={style.aside}>
      <AddTodo />
      <TodoList />
    </aside>
  );
};

export default Aside;
