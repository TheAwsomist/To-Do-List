import { createContext, useState } from "react";

export const TaskContext = createContext({});


export function TaskContextProvider ({children}) {

    // const temp = new Array();

    const [tasks,SetTasks] = useState([]);
    const [id_counter,SetCounter] = useState(0);


    const value = {
        tasks,
        SetTasks,
        id_counter,
        SetCounter
    };


    return ( 
    <TaskContext.Provider value = {value}>
        {children}
    </TaskContext.Provider> );
}
 
