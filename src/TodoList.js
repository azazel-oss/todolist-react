import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(key) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => {
          return todo.key !== key;
        }),
      };
    });
  }
  handleAdd(todo) {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            ...todo,
            key: uuidv4(),
          },
        ],
      };
    });
  }
  render() {
    return (
      <div>
        <NewTodoForm onSubmit={this.handleAdd} />
        <ul>
          {this.state.todos.map((element) => (
            <Todo
              text={element.todoText}
              key={element.key}
              index={element.key}
              onDelete={this.handleRemove}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
