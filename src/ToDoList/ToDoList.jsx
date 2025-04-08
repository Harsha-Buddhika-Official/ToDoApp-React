import react, {useState} from 'react';
import './ToDoList.css'

function ToDoList(){
    const [tasks, setTasks] = useState(["hello","hi","how are you"]);
    
    function addTasks(){
        const adding = document.getElementById("addTasks").value;
        document.getElementById("addTasks").value = "";
        if(adding == ""){
            alert("Text is empty");
        }
        else{
            setTasks(a => [...a, adding]);
        }
    }
    function removeTasks(indexToRemove){
        setTasks(tasks.filter((_, index) => index !== indexToRemove)); //_ is not used parameter(elements)
    }
    function editTasks(index){
        let newTask = prompt('Edit the task Here');
        const updatedTasks = [...tasks];
        updatedTasks[index] = newTask;
        setTasks(updatedTasks);
    }

    return(
        <div>
            <h2 className="hedding">To Do List</h2>
            <input type="text" id="addTasks" placeholder="Enter a Task..." className="textAdd"/>
            <button className="button" onClick={addTasks}> Add </button>
            <ul className="list">
                {tasks.map((event, index) => <li key={index} >{event}
                            <button onClick={() => removeTasks(index)}> Remove </button>
                            <button onClick={() => editTasks (index)}> Edit </button>
                            </li>)}
            </ul> 
        </div>
    );
}

export default ToDoList