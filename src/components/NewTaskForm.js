import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]); // Reset to first category
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input
        id="task-details"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        required
      />
      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
