import React from 'react';
import {TaskType} from "../App";
import './style/Todolist.css';

type TodolistProps = {
    tasks: Array<TaskType>
    title: string
}

export const Todolist = (props: TodolistProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {
                props.tasks.length === 0
                    ? <p>No tasks</p>
                    : <ul>
                        {props.tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                </li>
                            )
                        })}
                    </ul>
            }
            <div className='actionButtons'>
                <button>
                    All
                </button>
                <button>
                    Active
                </button>
                <button>
                    Complited
                </button>
            </div>
        </div>
    );
};