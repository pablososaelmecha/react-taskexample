import React from 'react'
import {useContext} from 'react'
import { TaskContext } from '../context/taskContext' 


function TaskCard({task}) {

    const {deleteTask}= useContext(TaskContext)

    function Alerta() {
        deleteTask(task.id)
        alert('Eliminando..' + task.id)
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p>{task.id}</p>
            <p className="text-sm bg-gray-500">{task.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={Alerta}>Eliminar</button>
        </div>
    )
}

export default TaskCard