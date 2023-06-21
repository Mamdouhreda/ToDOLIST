import React, { useState } from "react";

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
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
