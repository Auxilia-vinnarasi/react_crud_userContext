import React, { useState, createContext } from "react"
import uuid from "react-uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {

    const [tasks, setTasks] = useState([
        { title: "Wash the car", id: 1 },
        { title: "Have Breakfast", id: 2 },
        { title: "Read the book", id: 3 },
        { title: "Write the code", id: 4 }
    ]);

    const [editItem, setEditItem] = useState(null)

    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    };
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
    }

    const findItem=id=>{
        const item=tasks.find(task=>task.id===id);
        setEditItem(item);
    }

    const editTask=(title,id)=>{
    const newTasks=tasks.map(task=>(task.id===id ? {title,id}:task))
    setTasks(newTasks);
    setEditItem(null);
    }

    return (
        <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList,findItem,editTask,editItem}}>
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;