import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTasks() {
        if (newTask.trim() !== '') { 
            setTasks([...tasks, newTask]); 
            setNewTask("");
        }
    }

   function deleteTask(index) {
    const updatedTask = tasks.filter((_,i) => i !== index);
    setTasks(updatedTask);
   }

   function moveTaskUp(index) {
    if(index > 0) {
        const updatedTask = [...tasks];
        [updatedTask[index] , updatedTask[index -1]] = [updatedTask[index-1] , updatedTask[index]];
        setTasks(updatedTask);
    }
   }

   function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index] , updatedTask[index + 1]] = [updatedTask[index + 1] , updatedTask[index]];
            setTasks(updatedTask);
        }
   }


    return (
        <>
            <div className="container">
                <h1><label>Diamond</label>-List</h1>
                <div><input type="text" value={newTask} placeholder="Enter a task..." onChange={handleInputChange} />
                <button onClick={AddTasks}>Add</button></div>
                <ol>
                    {tasks.map((task, index) => <li key={index}><span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>delete</button>
                        <button className="move-up" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-down" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;
