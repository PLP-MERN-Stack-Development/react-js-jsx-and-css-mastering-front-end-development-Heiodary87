import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'

export default function Navbar(){
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={() => navigate('/')} className="text-lg font-bold">Week3App</button>
          <div className="hidden sm:flex gap-4">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}>Home</NavLink>
            <NavLink to='/tasks' className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}>Tasks</NavLink>
            <NavLink to='/api' className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}>API</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? 'Dark' : 'Light'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
