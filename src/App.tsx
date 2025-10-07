import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LatestRelease from './components/LatestRelease'
import Platforms from './components/Platforms'
import BookUs from './components/BookUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <LatestRelease />
      <Platforms />
      <BookUs />
    </div>
  )
}

export default App
