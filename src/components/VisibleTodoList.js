import React from 'react';
import SingleTodo from './SingleTodo';
import { CSSTransitionGroup } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';

export default class VisibleTodoList extends React.Component {
  render() {
    const items = this.props.visibleTodos.map(
      (todo) => <SingleTodo
        key = {todo.id}
        todoId = {todo.id}
        text = {todo.descriptionText}
        isDone = {todo.isDone}
        archiveToggleTodo = {this.props.archiveToggleTodo}
        removeTodo = {this.props.removeTodo}
        />
    );
    return (
      <div className="todoContainer">
        <h3> {this.props.visibilityFilter.replace("_", " ")} </h3>
            <AnimateHeight
              duration={ 500}
              height={ 'auto' }
            >
            <ul>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {items}
              </CSSTransitionGroup>
            </ul>
            </AnimateHeight>
          </div>
    );
  }
}
