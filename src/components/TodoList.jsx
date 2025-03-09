//* In our TodoList we want to list our functions needed for our app , ex: add btn, delete, edit, etc.

import { useState } from "react";

function TodoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function handleInputChange(event) {} // event would be the click, btn event
    function addTask() {}
    function deteleTask(index) {} // in here index is our item from todo list
    function moveTaskUp(index) {}
    function moveTaskDown(index) {}

    return (
        <div>
            <label htmlFor="btn"/>
            <input type="text" name="btn"/>
            <button>Add</button>
        </div>
    )
}

export default TodoList;