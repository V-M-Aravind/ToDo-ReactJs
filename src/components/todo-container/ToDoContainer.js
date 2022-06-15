import React from 'react';
import classes from './ToDoContainer.module.css';

function ToDoContainer({ children, title }) {
  return (
    <div className={classes['todo-card']}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default ToDoContainer;
