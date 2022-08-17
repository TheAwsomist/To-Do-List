import { useContext, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TaskContext } from "../TaskContext";


const SearchBar = () => {
    const {SetTasks,id_counter,tasks,SetCounter} = useContext(TaskContext);
    const task_text = useRef();

    const TaskSetter = (e) =>{
        e.preventDefault();
        // console.log(task_text.current.value);
        const task = {id:id_counter, text:task_text.current.value, completed:false};
        task_text.current.value = "";
        let temp = id_counter;
        // temp++;
        SetCounter(++temp);
        let temp_tasks = [...tasks];
        temp_tasks.push(task);
        // console.log(temp_tasks + "before");
        SetTasks(temp_tasks);
    }

    return ( 
        <div className="searchbar">
            <form action="none" onSubmit={TaskSetter}>
                    <input type="text" name="task" placeholder="Enter Your Task Here.." ref={task_text}/>
                    <button onSubmit={TaskSetter}><AiOutlinePlus className="plus-icon"/></button>
            </form>
        </div>
     );
}
 
export default SearchBar;