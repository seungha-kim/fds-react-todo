import React, { Component } from 'react';

const todos = [
  {
    id: 1,
    body: 'React 공부',
    complete: true
  },
  {
    id: 2,
    body: 'Redux 공부',
    complete: false
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>할 일 목록</h1>
        <ul>
          {
            todos.map(todo => (
              <li key={todo.id}>{todo.body}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
