import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function updateNewItem(event) {
    const { value } = event.target;
    setNewItem(value);
  }

  function addItem() {
    setItemsList((previousItems) => [...previousItems, newItem]);
    setNewItem("");
  }
 
      const deleteItem = (id) => {
        setItemsList(previousItems => {
          return previousItems.filter((item, index) => index !== id);
        });
      };
      
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          onChange={updateNewItem}
          value={newItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map((item, index) => (
           <ToDoItem  key = {index} id={index} text={item} onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
