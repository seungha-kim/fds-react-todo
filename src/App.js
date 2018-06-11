import React, { Component } from 'react';
import TodoList from './components/TodoList';
import axios from 'axios';

let count = 1;

const todoAPI = axios.create({
  baseURL: 'https://fds-json-server-todo-noauth.glitch.me/'
});

class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: 'React 공부',
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: 'Redux 공부',
      //   complete: false
      // },
    ],
    newTodoBody: ''
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    });
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
    const {todos, newTodoBody, loading} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList
            todos={todos}
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
          />
        )}
        
      </div>
    );
  }
}

export default App;
