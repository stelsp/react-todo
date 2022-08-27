import React, { FC } from 'react';
import { useData } from '../../context/context';
import TodoItem from '../todo-item';

import style from './style.module.scss';

const TodoList: FC = () => {
  const { todos, filterInput, handleFilterInput } = useData()!;

  const filteredData = todos.filter((el) => {
    if (filterInput === '') {
      return el;
    } else {
      return el.title.toLowerCase().includes(filterInput);
    }
  });

  return (
    <>
      <input
        type="search"
        value={filterInput}
        onChange={handleFilterInput}
        placeholder="search..."
      />
      <ul className={style.todoList}>
        {filteredData.map((el) => (
          <TodoItem el={el} key={el.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
