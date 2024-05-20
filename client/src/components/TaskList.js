import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import TaskItem from "./TaskItem";

const TaskList = observer(()=>{
    const {task} = useContext(Context)
    return(
        <div>
            {task.tasks.map(task=>
            <TaskItem key={task.id} task={task}/>)}
        </div>
    )
})

export default TaskList;