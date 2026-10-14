function TaskItem({ task, completeTask, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(task.id)}
      />
      <span>{task.title}</span>
      {task.completed ? <span>Completed</span> : <span>Not Completed</span>}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default TaskItem;
