import React from 'react';
import TodoBoardComponent from './TodoBoardComponent';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.visibilityFilters = ["ALL_TODOS", "REMAINING_TODOS", "COMPLETED_TODOS"];
    this.state = {
      boards: this.props.dataInterface.getAllBoards(),
      visibilityFilter: "ALL_TODOS"
    };
  }
  addBoard = () => {
    if (this._boardInputField.value) {
      this.props.dataInterface.addBoard(this._boardInputField.value);
      this.setState({boards: this.props.dataInterface.getAllBoards()});
      this._boardInputField.value = '';
    }
  }
  changeVisibilityFilter = e => {
      this.setState({visibilityFilter: e.target.dataset.id});
  }
  addTodo = (boardId, input) => {
      this.props.dataInterface.addTodo(boardId, input);
      this.setState({
        boards: this.props.dataInterface.getAllBoards()
      });
      console.log(this.props.dataInterface.getBoardTodos(boardId));
  }
  removeTodo = (boardId, e) => {
    this.props.dataInterface.removeTodo(boardId, e.target.dataset.id);
    this.setState({
      boards: this.props.dataInterface.getAllBoards()
    });
  }
  archiveToggleTodo = (boardId, e) => {
    this.props.dataInterface.archiveToggleTodo(boardId, e.target.dataset.id);
    this.setState({
      boards: this.props.dataInterface.getAllBoards()
    });
  }
  render() {
    return (
      <div className="container">
        <div className="optionContainer">
        <div className="addBoard">
        <h1 className="title"> APHSAI'S TODO LIST </h1>
        <input
          id = "action"
          type = "text"
          placeholder = "Create a Board"
          ref = {(c => this._boardInputField = c)}
        />
        <button onClick={this.addBoard}> Add Board </button>
        <div>
          {
            this.visibilityFilters.map(
              visibilityFilter =>
              <button
                key={visibilityFilter}
                onClick={this.changeVisibilityFilter}
                data-id={visibilityFilter}>
                {visibilityFilter.replace("_", " ")}
              </button>
            )
          }
        </div>
        </div>
      </div>
        <div id="boardContainer">
        {
          this.state.boards.map(
            (board) =>
            <TodoBoardComponent
              visibilityFilter = {this.state.visibilityFilter}
              boardId = {board.id}
              key = {board.id}
              todos = {board.todos}
              getBoardTodos = {this.props.dataInterface.getBoardTodos}
              addTodo = {this.addTodo}
              removeTodo = {this.removeTodo}
              archiveToggleTodo = {this.archiveToggleTodo}
              title = {board.title}
            />
          )
        }
        </div>
      </div>
    );
  }
}
