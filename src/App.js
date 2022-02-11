import React, { Component } from "react";
import AddItem from "./Components/AddItem/AddItem";
import ListItems from "./Components/ListItems/ListItems";

export default class App extends Component {
  state = {
    items: [
      { id: 1, name: "nour", age: 22 },
      { id: 2, name: "koko", age: 21 },
      { id: 3, name: "jojo", age: 29 },
      { id: 4, name: "nody", age: 32 },
    ],
  };
  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
