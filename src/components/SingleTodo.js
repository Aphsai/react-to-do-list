import React from 'react';

export default class SingleTodo extends React.Component {
  render() {
    return (
      <li className={this.props.isDone? "changeBack":""}
          data-id={this.props.todoId}
          checked={this.props.isDone}
          onMouseDown={this.props.archiveToggleTodo}>
        <label className={this.props.isDone? "crossed":"open"}>{this.props.text}</label>
        <button
          className="deleteButton"
          data-id={this.props.todoId}
          onClick={this.props.removeTodo}>
          X
        </button>
        <div style={{clear:'both'}}></div>
      </li>
    );
  }
}
