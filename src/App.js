import React, { Component } from 'react';

let count = 0;

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: 'React 공부',
        complete: true
      },
      {
        id: count++,
        body: 'Redux 공부',
        complete: false
      },
    ],
    newTodoBody: ''
  }

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  }

  handleButtonClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        body: this.state.newTodoBody,
        complete: false,
        id: count++
      };

      this.setState({
        todos: [
          ...this.state.todos,
          newTodo
        ],
        newTodoBody: ''
      });
    }
  }

  render() {
    const {todos, newTodoBody} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        <ul>
          {
            todos.map(todo => (
              <li className={todo.complete ? 'complete' : ''} key={todo.id}>
                {todo.body}
                <button onClick={e => {
                  this.setState({
                    todos: todos.map(t => {
                      const newTodo = {
                        ...t
                      };
                      if (t.id === todo.id) {
                        newTodo.complete = true;
                      }
                      return newTodo;
                    })
                  })
                }}>완료</button>
                <button onClick={e => {
                  this.setState({
                    todos: todos.filter(t => todo.id !== t.id)
                  })
                }}>삭제</button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
