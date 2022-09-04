import axios from "axios";
import { useContext, useEffect } from "react";
import { TaskContext } from "../TaskContext";
import Tasks from "./Tasks";

const TaskList = () => {
  const {SetTasks,id_counter,SetCounter} = useContext(TaskContext);

  const temp_tasks = [];
  useEffect(()=>{
    axios.get("http://localhost:5000/").then(res =>{
      // console.log(res.data);
      res.data.map(task =>{
        temp_tasks.push({
          "id":task.id,
          "text":task.text,
          "completed":task.completed
        });
        SetCounter(res.data[res.data.length-1].id)
        SetTasks(temp_tasks);
      })
    }).catch((error) => {
      console.log("could not fetch data ; - ;");
    })
  },[])
  const { tasks } = useContext(TaskContext);
  useEffect(()=>console.log(tasks),[tasks]);
  console.log(tasks);
  return (
    <>
      {tasks !== 0 && (
        <div className="tasklist">
          {tasks.map((task) => {return (<Tasks task={task} key={task.id} id = {task.id}/>)}
          )}
        </div>
      )}
    </>
  );
};

export default TaskList;
