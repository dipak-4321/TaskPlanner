import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const usePlanner = create(persist(
    (set)=>({
    tasks : [],
    setTasks : (payload)=>set((state)=>({
        tasks : [...state.tasks,payload]
    })),
    deleteTask : (id)=>set((state)=>({
        tasks : state.tasks.filter((task)=>task.id !== id)

    }))
}),
   {name: 'planner'}
))
