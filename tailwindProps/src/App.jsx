import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Coder",
    age: 22
  }

  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded'> Tailwild Test</h1>
      <Card username="Coder" btnText="ClickMe" />
      <Card username="Amosh" btnText="VisitMe" />
    </>
  )
}

export default App
