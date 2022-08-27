import React, { FC } from 'react';
import AddTodo from '../../components/add-todo';
import TodoList from '../../components/todo-list';

import style from './style.module.scss';

const Aside: FC = () => {
  return (
    <aside className={style.aside}>
      <AddTodo />
      <TodoList />
    </aside>
  );
};

export default Aside;
