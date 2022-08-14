import React, { FC } from 'react';

import style from './style.module.scss';

const TodoItem: FC = () => {
  return <li className={style.todoItem}>TodoItem</li>;
};

export default TodoItem;
