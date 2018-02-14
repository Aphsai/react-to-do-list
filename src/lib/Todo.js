function guidGenerator() {
  function S4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
export class Todo {
  constructor(descriptionText, isDone, id) {
    this.descriptionText = descriptionText || '';
    this.isDone = isDone || false;
    this.id = id || guidGenerator();
  }
}
export class TodoBoard {
  constructor(title, id) {
    this.title = title || '';
    this.id = id || guidGenerator();
    this.todos = [];
  }
}
