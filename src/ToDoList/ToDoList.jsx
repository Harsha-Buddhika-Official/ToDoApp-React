import react, {useState} from 'react';
import './ToDoList.css'

function ToDoList(){
    const [events, setEvents] = useState([]);
    
    function addEventsToList(){
        const adding = document.getElementById("addEvents").value;
        document.getElementById("addEvents").value = "";

        setEvents(a => [...a, adding]);
    }
    function removeEventsToList(indexToRemove){
        setEvents(events.filter((_, index) => index !== indexToRemove));
    }

    return(
        <div>
            <h2 className="hedding">To Do List</h2>
            <ul>
                {events.map((event, index) => <li key={index}>{event}
                            <button onClick={() => removeEventsToList(index)} 
                            > Remove </button> 
                            <button> Edit </button>
                            </li>)}
            </ul>
            <input type="text" id="addEvents" placeholder="Add Your Events" className="textAdd"/>
            <button className="button" onClick={addEventsToList}> Add </button>
        </div>
    );
}
export default ToDoList