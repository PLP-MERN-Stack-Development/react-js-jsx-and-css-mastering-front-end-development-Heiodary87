import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Week 3 — React + Tailwind</h1>
        <div className="text-sm text-gray-600 dark:text-gray-300">JSX · Hooks · Router · API</div>
      </div>

      <Card>
        <p>This project demonstrates component architecture, state management, hooks, context-based theme switching, and API integration.</p>
        <div className="mt-4 flex gap-2">
          <Link to="/tasks" className="px-3 py-2 bg-blue-600 text-white rounded">Open Tasks</Link>
          <Link to="/api" className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded">API Posts</Link>
        </div>
      </Card>
    </div>
  )
}
