import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const updateTasks = (id) => {
    console.log('hellooo');
    const newTasks = [];
    for (const task of tasks) {
      // const newTask = { ...task };
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      newTasks.push(task);
    }
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateTasks={updateTasks} />}</div>
      </main>
    </div>
  );
};

export default App;
