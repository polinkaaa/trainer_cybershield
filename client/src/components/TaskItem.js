import {useNavigate} from "react-router-dom"
import { TASKS_ROUTE } from "../utils/consts"

const TaskItem = ({task}) =>{
    const history = useNavigate()
    return(
        <div className="card">
            <div>{task.title}</div>
            <span>{task.points}</span>
            <div>{task.task_text}</div>
            <span onClick={()=>history(TASKS_ROUTE+'/'+task.id)} className="more">Далее</span>
        </div>
    )
}

export default TaskItem;