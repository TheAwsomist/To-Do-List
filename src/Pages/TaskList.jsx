import { useContext, useEffect } from "react";
import { TaskContext } from "../TaskContext";
import Tasks from "./Tasks";

const TaskList = () => {
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
