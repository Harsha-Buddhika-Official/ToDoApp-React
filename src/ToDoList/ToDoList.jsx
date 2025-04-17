import React, { useState } from 'react';
import './ToDoList.css'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    
    function addTasks(){
        const adding = document.getElementById("addTasks").value; //taking enterd text and storing in varible
        document.getElementById("addTasks").value = "";  //erase task enterd bar
        if(adding == ""){
            alert("Text is empty");
        }
        else{
            setTasks(a => [...a, {text: adding, done:false}]); 
        }
    }
    function removeTasks(indexToRemove){
        setTasks(tasks.filter((_, index) => index !== indexToRemove)); //_ is not used parameter(elements)
    }
    function editTasks(index){
        let newTask = prompt('Edit the task Here', tasks[index].text);
        if (newTask !== null && newTask.trim() !== "") {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = newTask;
        setTasks(updatedTasks);
        }
    }
    function handleDone(index){
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    }

    return(
        <div>
            <h2 className="hedding">To Do List</h2>
            <input  type="text"
                    id="addTasks"
                    placeholder="Enter a Task..."
                    className="textAdd"/>
            <button className="button" onClick={addTasks}> Add </button>
            <ul className="list">
                {tasks.map((task, index) => (
                            <li key={index} className="list-item">
                                <span
                                    className={`list-item ${task.done ? "done" : ""}`}
                                    onClick={() => handleDone(index)}
                                    > {task.text}
                                </span>
                            <button onClick={() => removeTasks(index)}> Remove </button>
                            <button onClick={() => editTasks (index)}> Edit </button>
                            </li>))}
            </ul> 
        </div>
    );
}

export default ToDoList