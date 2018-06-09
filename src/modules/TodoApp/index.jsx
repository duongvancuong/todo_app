import React from 'react'

import Filter from './components/Filter'
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filter />
  </div>
);

export default TodoApp;
