import { useState, useEffect } from "react";
import { getTasks, addTask, toggleTask, deleteTask } from "./api";
import "./App.css";
import icon from "./images/icon.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleAdd = async () => {
    if (!newTask) return;
    await addTask(newTask);
    setNewTask("");
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await toggleTask(id);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container">
      <div className="to-do">
        <h2>TO-DO List <img src={icon} alt="icon" /></h2>
        <div className="row">
          <input 
            type="text" 
            placeholder="Enter your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul id="items">
          {tasks.map(task => (
            <li key={task.id} 
                className={task.is_done ? "checked" : ""}
                onClick={() => handleToggle(task.id)}>
              {task.title}
              <span onClick={(e) => { e.stopPropagation(); handleDelete(task.id); }}>&#x2715;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
