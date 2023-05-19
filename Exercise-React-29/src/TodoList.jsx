import React, {useState} from 'react';

const TodoList = ({ render }) => {
  const [items, setItems] = useState(['Task 1', 'Task 2', 'Task 3']);

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    render(updatedItems);
  };

  return (
    <div>
      <h2>List:</h2>
      {items.map((item) => (
        <div>
          <span>{item}</span>
          <button onClick={() => handleDelete(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;