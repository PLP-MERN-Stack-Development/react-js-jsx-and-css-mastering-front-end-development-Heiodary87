import React from 'react'
import clsx from 'clsx'

export default function Button({ children, variant = 'primary', onClick, className = '', ...rest }){
  const base = 'px-3 py-2 rounded-md font-medium transition-transform active:scale-95'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:opacity-90',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }

  return (
    <button onClick={onClick} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
