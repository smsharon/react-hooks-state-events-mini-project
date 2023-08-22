import React from "react";
import Task from "./Task";
function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const handleTaskDelete = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  };
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;
