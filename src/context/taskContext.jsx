import {createContext, useState, useEffect} from 'react'
import { tasks as data } from '../data/Task'

export const TaskContext=createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function deleteTask(taskid){
        setTasks(tasks.filter(task => task.id !== taskid))
        console.log(tasks)
      }
      
      function createTask(title,description) {
      
        setTasks([...tasks,{
          title,
          id: tasks.length,
          description,
        }])
      }


      useEffect(() => {
        setTasks(data)
      }, [])

    return (
     <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask:createTask
     }}>
        {props.children}
     </TaskContext.Provider>
    )
}
 