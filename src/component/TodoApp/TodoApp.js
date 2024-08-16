import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items: [],
    isEditing: false,
    currentIndex: null,
    editInput: "",
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    console.log(key);
    const allItems = this.state.items;
    allItems.splice(key,1);

    this.setState({
        items: allItems
    })
  };
  editItem = (index) => {
    this.setState({
      isEditing: true,
      currentIndex: index,
      editInput: this.state.items[index],
    });
  };

  handleEditChange = (event) => {
    this.setState({
      editInput: event.target.value,
    });
  };

  saveEdit = (event) => {
    event.preventDefault();
    const { editInput, currentIndex } = this.state;

    this.setState((prevState) => {
      const newItems = [...prevState.items];
      newItems[currentIndex] = editInput;

      return {
        items: newItems,
        isEditing: false,
        currentIndex: null,
        editInput: "",
      };
    });
  };


  render() {
    const { input, items, isEditing,editInput } = this.state;
    console.log(items);
    return (
      <div className="todo-container" >
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TODO APP</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items...."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
                 {isEditing && this.state.currentIndex === index ? (
                <form onSubmit={this.saveEdit}>
                  <input
                    type="text"
                    value={editInput}
                     className="edit-input"
                     placeholder="edit item.."
                    onChange={this.handleEditChange}
                  />
                  <button type="submit" className="save-button">Save</button>
                </form>
              ) : (
                <>
                {data}{" "}
                <div className="icon-container">
                <i
                    className="fa-solid fa-trash"
                    onClick={() => this.deleteItem(index)}
                ></i>
                <i
                    className="fa-solid fa-edit"
                    onClick={() => this.editItem(index)}
                ></i>
              </div>
            </>
          )}
         </li>
        ))}

        </ul>
      </div>
    );
  }
}
export default TodoApp;
