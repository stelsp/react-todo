import React, { FC } from 'react';
import TodoList from '../../components/todo-list';

import style from './style.module.scss';

const Aside: FC = () => {
  return (
    <aside className={style.aside}>
      <TodoList />
    </aside>
  );
};

export default Aside;
