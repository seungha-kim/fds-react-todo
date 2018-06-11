import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {
      todos,
      handleTodoItemComplete,
      handleTodoItemDelete
    } = this.props;
    return (
      <ul>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id} 
              {...todo}
              onComplete={handleTodoItemComplete} 
              onDelete={handleTodoItemDelete} 
            />
          ))
        }
      </ul>
    )
  }
}