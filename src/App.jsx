import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask() {
    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (
    <div>
      <h1>Student Task Manager</h1>
      <TaskForm task={task} setTask={setTask} addTask={addTask} />
      <h2>Task Statistics</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default App;
