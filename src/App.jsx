import React, { useState } from 'react';
import {TaskForm} from "../utilis/taskform.jsx";
import {TaskList} from "../utilis/tasklist.jsx";

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {  //добавили завдання
        setTasks([newTask, ...tasks]);
    };

    const deleteTask = (taskId) => {     //видалили завдання
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskStatus = (taskId) => {    //статус виконання
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, status: task.status === 'completed' ? 'no completed' : 'completed' }
                    : task
            )
        );
    };

    const sortedTasks = tasks.sort((a, b) => b.createdAt - a.createdAt); //сортировка
    return (
        <div>
            <TaskForm addTask={addTask} />
            <TaskList tasks={sortedTasks} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
        </div>
    );
}

export default App;
