import React from "react";
import NavBar from "../components/NavBar";
import TaskList from "../components/TaskList";

const Tasks = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>Задачи</h1>
                <button>Криптография</button>
                <button>Стеганография</button>
                <TaskList/>
            </div>
        </div>
    );
};

export default Tasks;