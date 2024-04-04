import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1

    if(counter>= 20){
      counter=0
    }else{
      setCounter( (prevCounter) =>  prevCounter + 1)  //setCounter accept call back which fetch last updated state
      setCounter( (prevCounter) =>  prevCounter + 1 )
      setCounter( (prevCounter) =>  prevCounter + 1 )
      setCounter( (prevCounter) =>  prevCounter + 1 )
    }   
  }

  const removeValue = () => {

    if(counter > 0){
       setCounter(counter - 1)
    }else{
      counter=0
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
