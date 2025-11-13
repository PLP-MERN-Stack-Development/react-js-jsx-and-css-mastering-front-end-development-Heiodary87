import React, { useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Tasks(){
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, title: 'Sample task', completed: false }
  ])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('All')

  const addTask = () => {
    const t = text.trim()
    if(!t) return
    setTasks(prev => [{ id: Date.now(), title: t, completed: false }, ...prev])
    setText('')
  }

  const toggle = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const remove = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const filtered = useMemo(() => {
    if(filter === 'Active') return tasks.filter(t => !t.completed)
    if(filter === 'Completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">Task Manager</h2>

      <Card>
        <div className="flex gap-2">
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a task" className="flex-1 px-3 py-2 rounded border dark:bg-gray-700" />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="mt-4 flex gap-2">
          {['All','Active','Completed'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-4 space-y-2">
          {filtered.length === 0 && <li className="text-sm text-gray-500">No tasks</li>}
          {filtered.map(t => (
            <li key={t.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-2 rounded">
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={t.completed} onChange={() => toggle(t.id)} />
                <span className={t.completed ? 'line-through text-gray-500' : ''}>{t.title}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => toggle(t.id)}>{t.completed ? 'Undo' : 'Done'}</Button>
                <Button variant="danger" onClick={() => remove(t.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
