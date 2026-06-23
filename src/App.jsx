import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './Components/Header'
import HomePage from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>Parking Lot Finder</h1> */}
     <Header/>
     <HomePage/>
    </>
  )
}

export default App
