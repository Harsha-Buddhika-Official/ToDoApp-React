import react, {useState} from 'react';
import './ToDoList.css'

function ToDoList(){
    const [events, setEvents] = useState([]);
    
    function addEventsToList(){
        const adding = document.getElementById("addEvents").value;
        document.getElementById("addEvents").value = "";
        if(adding == ""){
            alert("Text is empty");
        }
        else{
            setEvents(a => [...a, adding]);
        }
    }
    function removeEvents(indexToRemove){
        setEvents(events.filter((_, i) => i !== indexToRemove));
    }
    function editEvents(){
        
    }

    return(
        <div>
            <h2 className="hedding">To Do List</h2>
            <ul className="list">
                {events.map((event, index) => <li key={index} >{event}
                            <button onClick={() => removeEvents(index)} > Remove </button> 
                            <button onClick={() => editEvents (index)}> Edit </button>
                            </li>)}
            </ul>
            <input type="text" id="addEvents" placeholder="Add Your Events" className="textAdd"/>
            <button className="button" onClick={addEventsToList}> Add </button>
        </div>
    );
}
export default ToDoList