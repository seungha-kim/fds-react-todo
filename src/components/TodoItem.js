import React, { Component } from 'react';

export default class TodoItem extends Component {
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
