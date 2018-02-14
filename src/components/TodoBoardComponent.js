import React from 'react'
import VisibleTodoList from './VisibleTodoList'

export default class TodoBoardComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  addTodo = () => {
    if (this._todoInputField.value) {
      this.props.addTodo(this.props.boardId, this._todoInputField.value);
      this._todoInputField.value = '';
    }
  }
  visibleTodos = () => {
    switch (this.props.visibilityFilter) {
      case "ALL_TODOS":
        return this.props.todos;
      case "REMAINING_TODOS":
        return this.props.todos.filter(todo => todo.isDone === false);
      case "COMPLETED_TODOS":
        return this.props.todos.filter(todo => todo.isDone === true);
      default:
        return this.props.todos;
    }
  }
  render () {
    let visibleTodos = this.visibleTodos();
    console.log("VISIBLE TODOS: " + this.visibleTodos());
      return (
        <div>
          <input
            id = "action"
            type = "text"
            placeholder = "Create a Todo"
            ref = {(c => this._todoInputField = c)}
          />
          <button onClick={this.addTodo}> Add Todo </button>
        { visibleTodos &&
            <VisibleTodoList
              visibleTodos = {visibleTodos}
              archiveToggleTodo = {this.props.archiveToggleTodo}
              visibilityFilter = {this.props.visibilityFilter}
              removeTodo = {this.props.removeTodo}
            />
        }
        </div>
      );
  }
}
