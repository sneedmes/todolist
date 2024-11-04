import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}
function App() {
    // Array<TaskType> === TaskType[]
    const tasks1:Array<TaskType> = [
        { id: 1, title: 'Над пропастью во ржи', isDone: false },
        { id: 2, title: 'Мы', isDone: true },
        { id: 3, title: 'Анна Каренина', isDone: true },
        { id: 4, title: 'Преступление и наказание', isDone: true },
        { id: 5, title: 'Джейн Эйр', isDone: false },
        { id: 6, title: 'Война и мир', isDone: true }
    ]
    const tasks2: Array<TaskType> = [
        { id: 1, title: 'React', isDone: true },
        { id: 2, title: 'Web-site', isDone: false },
        { id: 3, title: 'Tic-Tac-Toe', isDone: false },
        { id: 4, title: 'Matrix', isDone: true }
    ]
    const tasks3: Array<TaskType> = [
        {id: 1, title: 'Homework', isDone: false},
        {id: 2, title: 'Reading', isDone: true},
        {id: 3, title: 'Commiting to GH', isDone: true},
        {id: 4, title: 'Workout', isDone: true},
        {id: 5, title: 'Keep a diet', isDone: false},
    ]
  return (
    <div className="App">
        <Todolist title="Daily plan" tasks={tasks3}/>
        <Todolist title="What to read" tasks={tasks1}/>
        <Todolist title="Projects" tasks={tasks2}/>
    </div>
  );
}

export default App;
