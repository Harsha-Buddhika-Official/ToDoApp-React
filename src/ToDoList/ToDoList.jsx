import react, {useState} from 'react';
import './ToDoList.css'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    
    function addTasksToList(){
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
        setTasks(tasks.filter((_, i) => i !== indexToRemove));
    }
    function editTasks(){
        setTasks();
    }

    return(
        <div>
            <h2 className="hedding">To Do List</h2>
            <ul className="list">
                {tasks.map((event, index) => <li key={index} >{event}
                            <button onClick={() => removeTasks(index)} > Remove </button> 
                            <button onClick={() => editTasks (index)}> Edit </button>
                            </li>)}
            </ul>
            <input type="text" id="addTasks" placeholder="Add Your Events" className="textAdd"/>
            <button className="button" onClick={addTasksToList}> Add </button>
        </div>
    );
}
export default ToDoList