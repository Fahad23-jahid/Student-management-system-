function TaskForm({ task, setTask, addTask }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    addTask();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;
