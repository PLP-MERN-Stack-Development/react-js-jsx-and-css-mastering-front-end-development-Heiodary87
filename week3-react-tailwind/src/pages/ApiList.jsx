import React, { useMemo, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

export default function ApiList(){
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const limit = 10
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts', [])

  const filtered = useMemo(() => {
    if(!data) return []
    const q = query.trim().toLowerCase()
    let list = data
    if(q) list = list.filter(item => item.title.toLowerCase().includes(q) || item.body.toLowerCase().includes(q))
    const start = (page - 1) * limit
    return list.slice(start, start + limit)
  }, [data, page, query])

  const total = data ? Math.ceil(data.length / limit) : 0

  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold">JSONPlaceholder Posts</h2>

      <Card>
        <div className="flex gap-2 mb-3">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search posts" className="flex-1 px-3 py-2 rounded border dark:bg-gray-700" />
        </div>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">Error loading posts</div>}

        <div className="grid gap-3">
          {filtered.map(post => (
            <div key={post.id} className="p-3 border rounded bg-white dark:bg-gray-800">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{post.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">Page {page} / {total || 1}</div>
          <div className="flex gap-2">
            <button onClick={() => setPage(p => Math.max(1, p-1))} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">Prev</button>
            <button onClick={() => setPage(p => Math.min(total || 1, p+1))} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">Next</button>
          </div>
        </div>
      </Card>
    </div>
  )
}
