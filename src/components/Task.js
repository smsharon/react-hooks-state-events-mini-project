import React from "react";

function Task({ task, onDelete }) {
  const { category, text } = task;
  const handleDelete = () => {
    onDelete(task.id);
  };
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
