import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <div className="task">
      <h4>{task.text}</h4>
      <p>{task.category}</p>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
