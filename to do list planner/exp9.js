import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, isCompleted: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List Planner</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;





import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
todoinput.js




import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;




import React from 'react';

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className={todo-item ${task.isCompleted ? 'completed' : ''}}>
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        className="task-text"
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
todoitem.js




