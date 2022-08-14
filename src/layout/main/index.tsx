import React, { FC } from 'react';
import TodoEdit from '../../components/todo-edit';

import style from './style.module.scss';

const Main: FC = () => {
  return (
    <main className={style.main}>
      <TodoEdit />
    </main>
  );
};

export default Main;
