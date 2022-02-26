import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.onDelete(this.props.index);
  }
  render() {
    return (
      <li>
        <div>{this.props.text}</div>
        <button onClick={this.handleDelete}>Delete todo</button>
      </li>
    );
  }
}

export default Todo;
