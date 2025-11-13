import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-700 dark:text-gray-300 flex justify-between">
        <div>© {new Date().getFullYear()} Week3App. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
