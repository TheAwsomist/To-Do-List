import { useContext } from "react";
import { TaskContext } from "../TaskContext";

const Tasks = ({task, id}) => {
    const {tasks,SetTasks} = useContext(TaskContext);

    const deleter = (id) =>{
        let temp = [...tasks]
        temp = temp.filter(task => task.id !== id);
        console.log(id);
        console.log(temp);
        SetTasks(temp);
    }

    const completer = (id) =>{
        let temp = [...tasks];
        temp.map(task => {
            if(task.id === id)
                task.completed = !(task.completed);
        })
        SetTasks(temp);
    }

    return ( 
        <div className="tasks">
            <div className="task-data">
                <p className={task.completed?"task-text crossed":"task-text"}>{task.text}</p>
                <div className="options">
                    <button className="delete-button" onClick={() => deleter(id)}>Delete</button>
                    <button className="complete-button" onClick={() => completer(id)}>Completed</button>
                </div>
            </div>
        </div>
     );
}
 
export default Tasks;