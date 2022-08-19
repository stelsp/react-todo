import React, { FC } from 'react';
import TodoList from '../../components/todo-list';
import { useData } from '../../context/context';

import style from './style.module.scss';

const AddTodoBtn: FC = () => {
  const { addTodo } = useData();

  if (!addTodo) return null;

  return <button onClick={() => addTodo()}>ADD</button>;
};

const Aside: FC = () => {
  return (
    <aside className={style.aside}>
      <AddTodoBtn />

      <div className={style.aside__divider} />

      <TodoList />
    </aside>
  );
};

export default Aside;
