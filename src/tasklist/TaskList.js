import { useState } from "react";
import Task from "./Task";
import Form from "./Form";

import './TaskList.css';

function TaskList()
{
    let [tasks, setTasks] = useState
    (
        [
            {
                text:"Сходить в магазин",
                done:false
            },
            {
                text:"Полить цветы",
                done:false
            },
            {
                text:"Покормить кота",
                done:false
            },
            {
                text:"Сделать домашку",
                done:false
            },
        ]
    )
    let addTask = text => {
        let newTask =[...tasks,{text}];
        setTasks(newTask);
    }
    return(
        <div className="task-list">
            {
                tasks.map(
                    (task, index) => (
                        <Task key={index} task={task}/>
                    )
                )
            }
            <Form addTask={addTask}/>
        </div>
    )
}
export default TaskList;