import React, { useState } from 'react'

export default function ReactState() {
    // js area
    const [ username , setUsername ] = useState("fadliselaz")

    const handleButton = ()=>{
        setUsername("selva")
    }

    const handleInput = (e)=>{
        setUsername(e.target.value)
    }

    const returnedFunction = ( p , l )=>{
        let hitung = p * l
        return hitung
    }

  return (
    // JSX area
    <div className='App'>
        <h1>React State </h1>
        <h3> { username } </h3>
        <button onClick={()=>{
            returnedFunction(5,5)
        }}> ganti </button>
        <input type="text" placeholder='ganti text' onChange={ handleInput }  />
    </div>
  )
}
