import React, { useState } from 'react';

function ToDoList() {
    const [events, setEvents] = useState([]);

    function addEventsToList() {
        const adding = document.getElementById("addEvents").value.trim();
        if (adding !== "") {
            setEvents(a => [...a, adding]);
            document.getElementById("addEvents").value = "";
        }
    }

    function removeEventFromList(indexToRemove) {
        setEvents(events.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div>
            <h2 className="hedding">To Do List</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}> {event} <button onClick={() => removeEventFromList(index)} 
                            style={{ marginLeft: '10px' }} > Remove </button>
                    </li>
                ))}
            </ul>
            <input 
                type="text" 
                id="addEvents" 
                placeholder="Add Your Events" 
                className="textAdd" 
            />
            <button className="button" onClick={addEventsToList}>Add</button>
        </div>
    );
}

export default ToDoList;
