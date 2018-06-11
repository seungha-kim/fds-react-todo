import React, { Component } from 'react';

export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt('새 내용을 입력하세요');
    const {id, onBodyUpdate} = this.props;
    onBodyUpdate(id, newBody);
  }
  render() {
    const {
      id, 
      body, 
      complete, 
      onComplete, 
      onDelete
    } = this.props;
    return (
      <li className={complete ? 'complete' : ''} key={id}>
        <span onClick={this.handleBodyClick}>{body}</span>
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
