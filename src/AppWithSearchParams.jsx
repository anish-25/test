import { useState } from 'react'
import './App.css'
import { useSearchParams } from "react-router-dom";
export default function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    page: 1
  });
  let page = Number(searchParams.get("page"))
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      We are on Page <strong>{page}</strong> and you searched for <strong>{searchParams.get("query")}</strong>
      <input style={{ padding: "10px", width: "350px" }} value={searchParams.get("query")} onChange={(e) => setSearchParams(prev => { prev.set("query", e.target.value); return prev })} />
      <div style={{ display: "flex", gap: "20px" }}>
        {[1, 2, 3].map((item, index) => (
          <div key={index} style={{ padding: "4px", paddingX: "10px !important", border: "solid 1px", background: page === item ? "gray" : "", cursor: "pointer" }} onClick={() => setSearchParams(prev => { prev.set("page", item); return prev })}>{item}
          </div>
        ))}
      </div>
    </main>
  )
}
