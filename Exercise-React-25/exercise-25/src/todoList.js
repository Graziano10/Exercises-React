import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [newLi, setNewLi] = useState("");

  const handleWrite = () => {
    setList([...list, newLi]);
    setNewLi("");
  };

  

  return (
    <div style={{marginLeft: '20px', marginTop: '20px'}}>
      <input
        type="text"
        value={newLi}
        onChange={(event) => setNewLi(event.target.value)}
      />
      <button onClick={handleWrite}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
