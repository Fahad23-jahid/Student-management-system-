import TaskItem from "./TaskItem";
function TaskList({ tasks, completeTask, deleteTask }) {
  if (tasks.length == 0) {
    return <p> NO task </p>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
export default TaskList;
