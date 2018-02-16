import React from 'react'
import VisibleTodoList from './VisibleTodoList'
import { GithubPicker } from 'react-color'

export default class TodoBoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color : '#d6d6d6',
      textColor : 'rgba(0, 0, 0, 1)',
      displaySketch : false
    }
  }
  addTodo = () => {
    if (this._todoInputField.value) {
      this.props.addTodo(this.props.boardId, this._todoInputField.value);
      this._todoInputField.value = '';
    }
  }
  archiveToggleTodo = e => {
    e.stopPropagation();
    e.preventDefault();
    this.props.archiveToggleTodo(this.props.boardId, e);
  }
  removeTodo = e => {
    this.props.removeTodo(this.props.boardId, e);
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
  toggleSketch = () => {
    this.setState({
      displaySketch : !this.state.displaySketch
    });
  }
  displaySketch = () => {
    if (this.state.displaySketch)
      return 'block'
    return 'none'
  }
  handleChange = (color, event) => {
    this.setState ({
      color: color.hex
    });
    color.rgb.r = 255 - color.rgb.r;
    color.rgb.g = 255 - color.rgb.g;
    color.rgb.b = 255 - color.rgb.b;
    this.setState ({
      textColor : 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ', 1)'
    });
    this.toggleSketch();
  }
  render () {
    let visibleTodos = this.visibleTodos();
      return (
        <div className="listContainer">
          <h3> {this.props.title}
            <button className="deleteButton"
                      data-id={this.props.boardId}
                      onClick={this.props.removeBoard}> X </button>
          </h3>
          <input
            className = "todoInput"
            type = "text"
            placeholder = "Create a Todo"
            ref = {(c => this._todoInputField = c)}
          />
          <button onClick={this.addTodo} className="addTodoButton"> + </button>
          <button onClick={this.toggleSketch}> Change Colour </button>
          <div className="colorPicker" style={{display:this.displaySketch()}}>
            <GithubPicker
              onChange={this.handleChange}
              triangle='hide'
            />
          </div>
        { visibleTodos &&
            <VisibleTodoList
              color = {this.state.color}
              textColor = {this.state.textColor}
              title = {this.props.title}
              visibleTodos = {visibleTodos}
              archiveToggleTodo = {this.archiveToggleTodo}
              visibilityFilter = {this.props.visibilityFilter}
              removeTodo = {this.removeTodo}
            />
        }
        </div>
      );
  }
}
