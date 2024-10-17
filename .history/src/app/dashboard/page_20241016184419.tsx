'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Review code changes", completed: true },
    { id: 3, title: "Update portfolio", completed: false },
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Manager</CardTitle>
            <CardDescription>Manage your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className={task.completed ? "line-through" : ""}>{task.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New task"
              />
              <Button onClick={addTask}>Add</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Stats</CardTitle>
            <CardDescription>Overview of your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Total Projects: 5</p>
              <p>Completed Projects: 2</p>
              <p>In Progress: 3</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}