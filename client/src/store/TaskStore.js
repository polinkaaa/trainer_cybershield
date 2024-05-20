import {makeAutoObservable} from "mobx"

export default class TaskStore {
    constructor() {
        this._tasks = [
            {id:1, title: 'title 1', task_text: 'task text 1', solution: 'solution 1 task', answer: 'answer 1 task', difficulty: 'easy', classification: 'Криптография', points: 10},
            {id:2, title: 'title 2', task_text: 'task text 2', solution: 'solution 2 task', answer: 'answer 2 task', difficulty: 'middle', classification: 'Стеганография', points: 20},
            {id:3, title: 'title 3', task_text: 'task text 3', solution: 'solution 3 task', answer: 'answer 3 task', difficulty: 'expert', classification: 'Криптография', points: 30}
        ]
        this._selectedTask = {}
        makeAutoObservable(this)
    }

    setTasks(tasks) {
        this._tasks = tasks
    }

    get tasks() {
        return this._tasks
    }

    setSelectedTask(task) {
        this._selectedTask = task
    }
    get selectedTask() {
        return this._selectedTask
    }
}