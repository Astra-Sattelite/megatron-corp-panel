import { useState } from 'react'
import './App.scss'
import { Content } from "./Content"
import { Header } from "./Header"
import { Menu } from "./Menu"

function App() {

  return (
    <div className="App">
      <Menu />
      <div className="ContentBlock">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default App
