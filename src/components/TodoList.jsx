//* In our TodoList we want to list our functions needed for our app , ex: add btn, delete, edit, etc.

import { useState, useEffect } from "react";

function TodoList() {
    //is a good practice to store the tasks as objects with text instead of just strings
    const [task, setTask] = useState([
        {text: "Paint a Portrait", completed: false, isEditing: false },
        {text: "Study code", completed: false, isEditing: false },
        {text: "Prep Dinner", completed: false, isEditing: false },
        {text: "Do SBA 320H", completed: false, isEditing: false },
    ]);

    const [newTask, setNewTask] = useState("");

        //to local storage the ToDos
        //! not working but also not affecting the code
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) {
            setTask(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);
    

    function handleInputChange(event) {  // event would be the click, any btn event
        setNewTask(event.target.value); 
    } 

    function addTask() {

        if(newTask.trim() !== "") {
            setTask(t => [...t, {text: newTask, completed: false, isEditing: false}]);
             setNewTask("");
        }    
    };

    function completedTask(index) {
        const updatedTask = [...task];
        updatedTask[index].completed = !updatedTask[index].completed;
        setTask(updatedTask);
    }

    function editTask(index) {
        const updatedTask = [...task];
        updatedTask[index].isEditing = !updatedTask[index].isEditing;
        setTask(updatedTask);
    }

    function saveEditTask(index, value) {
        const updatedTask = [...task];
        updatedTask[index] = { ...updatedTask[index], text: value };
        setTask(updatedTask);
    }

    function deteleTask(index) {   // index parameter targets the propmt task
        const updatedTask = task.filter((element, i) => i !== index);
        setTask(updatedTask);
    } 

    function moveTaskUp(index) {

        // here this function will move up by 1 index the toDo
        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }


    function moveTaskDown(index) {
        
        // here this function will move down by 1 index the todo
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
            {task.map((item, index) => (
                <li key={index} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                {item.isEditing ? (
                    <input
                    type="text"
                    value={item.text}
                    onChange={(e) => saveEditTask(index, e.target.value)}
                    />
                ) : (
                    <span className="text">{item.text}</span>
                )}
                
                <button className="complete-button" onClick={() => completedTask(index)}>
                    {item.completed ? "Undo" : "Complete"}
                </button>

                <button className="edit-button" onClick={() => editTask(index)}>
                    {item.isEditing ? "Save" : "Edit"}
                </button>

                <button className="delete-button" onClick={() => deteleTask(index)}>
                    Delete
                </button>

                <button className="moveTaskUp-button" onClick={() => moveTaskUp(index)}>
                    Move Up
                </button>

                <button className="moveTaskDown-button" onClick={() => moveTaskDown(index)}>
                    Move Down
                </button>
                </li>
            ))}
            </ol>
        </div>
    )
}

export default TodoList;