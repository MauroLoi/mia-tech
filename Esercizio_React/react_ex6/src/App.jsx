import React from "react"
import ItemList from "./ItemList"

function App() {
  const data = ["cane", "gatto", "leone", "serpente", "lupo", "cervo"];

  return (
    <>
      <ItemList animals={data}></ItemList>
    </>
  )
}

export default App
