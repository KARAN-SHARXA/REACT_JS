import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/componenet'

function App() {

  //create state
  // manage state
  // change state
  // sabhi child me state ko sync krwadunga
  const [name,setName] = useState('');

  return (
    <>
    <Card name={name} setName={setName}></Card>
    <p> i am inside Parent Component and value inside {name}</p>
   
    </>
  )
}

export default App
