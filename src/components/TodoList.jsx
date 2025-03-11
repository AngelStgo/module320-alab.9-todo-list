//* In our TodoList we want to list our functions needed for our app , ex: add btn, delete, edit, etc.

import { useState } from "react";

function TodoList() {

    const [task, setTask] = useState(["Paint a Portrait","Study code","Prep Dinner" ,"Play Videogames", "Do SBA 320H"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {  // event would be the click, any btn event
        setNewTask(event.target.value); 
    } 

    function addTask() {

        if(newTask.trim() !== "") {
            setTask(t => [...task, newTask]);
             setNewTask("");
        }    
    };

    function deteleTask(index) {   // index parameter targets the propmt task
        const updatedTask = task.filter((element, i) => i !== index);
        setTask(updatedTask);
    } 

    function moveTaskUp(index) {

        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }


    function moveTaskDown(index) {
        
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
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