import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false,
      isEditing: false,
      todoText: this.props.text,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
  }
  handleToggleComplete() {
    this.setState((prevState) => {
      return {
        isCompleted: !prevState.isCompleted,
      };
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    let updatedTodo = {
      todoText: this.state.todoText,
      key: this.props.index,
    };
    this.props.onUpdate(updatedTodo);
    this.toggleForm();
  }
  handleEditChange(e) {
    this.setState({
      todoText: e.target.value,
    });
  }
  toggleForm() {
    this.setState((prevState) => {
      return {
        isEditing: !prevState.isEditing,
      };
    });
  }
  handleDelete() {
    this.props.onDelete(this.props.index);
  }
  render() {
    return (
      <li>
        {this.state.isEditing ? (
          <div>
            <form>
              <input
                type="text"
                value={this.state.todoText}
                onChange={this.handleEditChange}
              />
              <button type="submit" onClick={this.handleUpdate}>
                Edit
              </button>
            </form>
          </div>
        ) : (
          <div>
            <span
              onClick={this.handleToggleComplete}
              className={this.state.isCompleted ? "todo_complete" : ""}
            >
              {this.props.text}
            </span>
            <button onClick={this.toggleForm}>Edit todo</button>
            <button onClick={this.handleDelete}>Delete todo</button>
          </div>
        )}
      </li>
    );
  }
}

export default Todo;
