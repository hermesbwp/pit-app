import React from 'react';
import './Todo.scss';

export default function TodoList({ todos = [] }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo">
          <input type="checkbox" />
          <span className={todo.isDone ? 'done' : ''}>{todo.name}</span>
        </div>
      ))}
    </div>
  );
}
