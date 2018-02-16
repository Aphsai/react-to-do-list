import React from 'react';

export default class SingleTodo extends React.Component {
  handleColor = () => {
    if (this.props.isDone) {
        return '#696969'
    }
    return this.props.color
  }
  render() {
    return (
      <li className={this.props.isDone? "changeBack":""}
          data-id={this.props.todoId}
          checked={this.props.isDone}
          onClick={this.props.archiveToggleTodo}
          style={{backgroundColor:this.handleColor()}}>
        <label className={this.props.isDone? "crossed":"open"}
            data-id={this.props.todoId}
            checked={this.props.isDone}
            onMouseDown={this.archiveToggleTodo}
            style={{color:this.props.textColor}}>
            {this.props.text}
        </label>
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
