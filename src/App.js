import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  const fetchDrivers = () => {
    axios
      .get(URL)
      .then((res) => {
        const newTasks = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchDrivers, []);

  const updateTasks = (id) => {
    let markCompleteChoice = 'mark_complete';
    for (const task of tasks) {
      // const newTask = { ...task };
      if (task.id === id) {
        if (task.isComplete) {
          markCompleteChoice = 'mark_incomplete';
        }
      }
    }

    axios
      .patch(`${URL}/${id}/${markCompleteChoice}`)
      .then(() => {
        const newTasks = [];
        for (const task of tasks) {
          // const newTask = { ...task };
          if (task.id === id) {
            task.isComplete = !task.isComplete;
          }
          newTasks.push(task);
        }
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = [];
        for (const task of tasks) {
          if (task.id != id) {
            newTasks.push(task);
          }
        }
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              updateTasks={updateTasks}
              deleteTask={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
