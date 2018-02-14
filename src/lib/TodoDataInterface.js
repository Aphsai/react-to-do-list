import { Todo, TodoBoard } from './Todo';
import { findIndex } from 'lodash';

export default class TodoDataInterface {
  constructor() {
    this.boards = [];
  }
  addBoard(title) {
    const newBoard = new TodoBoard (title);
    this.boards.push(newBoard);
    console.log(this.boards);
    return newBoard;
  }
  addTodo(boardId, descriptionText) {
    const boardIndex = findIndex(this.boards, (board) => board.id === boardId);
    const newTodo = new Todo (descriptionText);
    if (boardIndex > -1) {
      this.boards[boardIndex].todos.push(newTodo);
    }
  }
  archiveToggleTodo(boardId, todoId) {
    const boardIndex = findIndex(this.boards, (board) => board.id === boardId);
    if (boardIndex > -1) {
      const todoIndex = findIndex(this.boards[boardIndex], (todo) => todo.id === todoId);
      if (todoIndex > -1) {
        this.boards[boardIndex].todos[todoIndex].isDone = !this.todos[boards].todos[todoIndex].isDone;
      }
    }
  }
  removeTodo(boardId, todoId) {
    const boardIndex = findIndex(this.boards, (board) => board.id === boardId);
    if (boardIndex > -1) {
      const todoIndex = findIndex(this.boards[boardIndex], (todo) => todo.id === todoId);
      if (todoIndex > -1) {
        this.boards[boardIndex].todos.splice(todoIndex, 1);
      }
    }
  }
  getAllBoards() {
    return this.boards.map(board => board);
  }
  getBoardTodos(boardId) {
    const boardIndex = findIndex(this.boards, (board) => board.id === boardId);
    console.log("THE BOARDS: " + this.boar);
    if (boardIndex > -1) {
      console.log("Getting todos from board");
      return this.boards[boardIndex].todos.map(todo => todo);
    }
  }
}
