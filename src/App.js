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

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    })
  }

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => id !== t.id)
    })
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
              <TodoItem
                key={todo.id} 
                {...todo}
                onComplete={this.handleTodoItemComplete} 
                onDelete={this.handleTodoItemDelete} 
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

class TodoItem extends Component {
  render() {
    const {id, body, complete, onComplete, onDelete} = this.props;
    return (
      <li className={complete ? 'complete' : ''} key={id}>
        {body}
        <button onClick={e => {
          onComplete(id)
        }}>완료</button>
        <button onClick={e => {
          onDelete(id)
        }}>삭제</button>
      </li>
    )
  }
}

export default App;
