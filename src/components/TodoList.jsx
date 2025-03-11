//* In our TodoList we want to list our functions needed for our app , ex: add btn, delete, edit, etc.

import { useState } from "react";

function TodoList() {

    const [task, setTask] = useState(["Cook Dinner","Study code", "play games"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {  // event would be the click, any btn event
        setNewTask(event.target.value); 
    } 

    function addTask() {
        
    }

    function deteleTask(index) {   // index parameter targets the propmt task

    } 

    function moveTaskUp(index) {

    }


    function moveTaskDown(index) {

    }

    return (
        <div className="todo-list">
            <input 
            type="text" 
            placeholder="what we doing today?"
            name="addButton"
            value={newTask}
            onChange={handleInputChange}
            />
            <label htmlFor="addButton"></label>
            <button className="add-button"
            onClick={addTask}>Add</button>

            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button"
                        onClick={() => deteleTask(index)}> Delete </button>

                        <button className="moveTaskUp-button"
                        onClick={() => moveTaskUp(index)}> Move Up </button> 

                        <button className="moveTaskDown-button"
                        onClick={() => moveTaskDown(index)}> Move Down </button> 
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList;