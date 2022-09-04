import axios from "axios";
import { useEffect } from "react";
import { useContext, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TaskContext } from "../TaskContext";

const SearchBar = () => {
  const { SetTasks, id_counter, tasks, SetCounter } = useContext(TaskContext);
  const task_text = useRef();


  const TaskSetter = (e) => {
    e.preventDefault();
    // console.log(task_text.current.value);
    if (task_text.current.value !== " ") {
        let temp_id = id_counter;
        temp_id++;
        SetCounter(temp_id);
      const task = {
        id: temp_id,
        text: task_text.current.value,
        completed: false,
      };
      task_text.current.value = "";
      let temp = id_counter;
      // temp++;
      SetCounter(++temp);
      let temp_tasks = [...tasks];
      temp_tasks.push(task);
      // console.log(temp_tasks + "before");
      SetTasks(temp_tasks);
      axios
        .post("http://localhost:5000/addtask", task)
        .then((res) => console.log(res))
        .catch((error) => console.log(error.response.data));
    }
    else{
        alert("please write something in there! empty input will not be accepted");
    }
  };

  return (
    <div className="searchbar">
      <form action="none" onSubmit={TaskSetter}>
        <input
          type="text"
          name="task"
          placeholder="Enter Your Task Here.."
          ref={task_text}
          autoComplete="false"
          required
        />
        <button onSubmit={TaskSetter}>
          <AiOutlinePlus className="plus-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
