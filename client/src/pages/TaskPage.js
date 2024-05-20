import React from "react";
import NavBar from "../components/NavBar";

const TaskPage = () => {
    const task = {id:1, title: 'title 1', task_text: 'task text 1', solution: 'solution 1 task', answer: 'answer 1 task', difficulty: 'easy', classification: 'Криптография', points: 10}
    return (
        <div>
            <NavBar />
            <span>{task.id}</span>
            <span>{task.difficulty}</span>
            <span>{task.classification}</span>
            <span>{task.points}</span>
            <p>{task.task_text}</p>
            <input></input>
            <button>Подсказка</button>
            <button>Проверить</button>
        </div>
    );
};

export default TaskPage;