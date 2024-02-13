import { useState } from 'react'
import './App.css'

export default function App() {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      We are on Page <strong>{page}</strong> and you searched for <strong>{query}</strong>
      <input style={{ padding: "10px", width: "350px" }} value={query} onChange={(e) => setQuery(e.target.value)} />
      <div style={{ display: "flex", gap: "20px" }}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} style={{ padding: "4px", paddingX: "10px !important", border: "solid 1px", background: page === item ? "gray" : "", cursor: "pointer" }} onClick={() => setPage(item)}>{item}
          </div>
        ))}
      </div>
    </main>
  )
}
