import React from 'react';
import SingleTodo from './SingleTodo';
import { CSSTransitionGroup } from 'react-transition-group';

export default class VisibleTodoList extends React.Component {
  render() {
    return (
      <div className="todoContainer">
            <ul>
              {
                this.props.visibleTodos.map(
                (todo) => <SingleTodo
                  color = {this.props.color}
                  textColor = {this.props.textColor}
                  key = {todo.id}
                  todoId = {todo.id}
                  text = {todo.descriptionText}
                  isDone = {todo.isDone}
                  archiveToggleTodo = {this.props.archiveToggleTodo}
                  removeTodo = {this.props.removeTodo}
                  />
                )
              }
            </ul>
      </div>
    );
  }
}
