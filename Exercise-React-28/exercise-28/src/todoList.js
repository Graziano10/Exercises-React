import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);
  const [newLi, setNewLi] = useState("");


    const handleWrite = () => {
        if (list.length === 3) {
            setList([...list.slice(1), newLi]);
        } else {
            setList([...list, newLi])
        }
        setNewLi('');
    };

    const handle13 = (event) => {
        if (event.keyCode === 13) {
            handleWrite();
        };
    };

    const handleReset = () => {
        setList([]);
    };

    const handleRemove = () => {
        if(list.length > 0) {
            const arry = [...list];
            arry.pop();
            setList(arry);
        }
    }; 
  

  return (
    <div style={{marginLeft: '20px', marginTop: '20px', display: "flex"}}>
      <input
        type="text"
        value={newLi}
        onChange={(event) => setNewLi(event.target.value)} onKeyDown={handle13}
      />
      <button onClick={handleWrite}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRemove}>Remove</button>


      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};