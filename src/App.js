import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
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
    ]
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <ul>
          {
            todos.map(todo => (
              <li className={todo.complete ? 'complete' : ''} key={todo.id}>{todo.body}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
