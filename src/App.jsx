
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import './App.css'
function App(){
  const [counter, setCounter]=useState(0)
  const increase=()=>{
    setCounter(counter+1)
  }
  const decrease=()=>{
    setCounter(counter-1)
  }
  const reset=()=>{
    setCounter(0)
  }
  return (
    <>
    <div class="container">
     <button className='bt' onClick={increase}>increase</button>
     <button className='bt'   onClick={decrease}>decrease</button>
     <button className='bt'  onClick={reset}>reset</button>
    
    </div><span style={{background:"orange"}} className='s'>{counter}</span> 
    </>
  )
}

export default App
