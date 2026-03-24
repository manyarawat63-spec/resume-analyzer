import React from 'react'
import Upload from "./Components/Upload";
import './App.css'
import { useState } from 'react'
import Score from './Components/Score';
import Suggestions from './Components/Suggestions';
const App = () => {
const [file, setFile] = useState(null)
const [score, setScore] = useState(null)
const analyzer=()=>{
  const randomScore = Math.floor(Math.random() * 100) 
  setScore(randomScore)
}
  return (
    
    <div className='container'>
      <h1>Resume Analyzer</h1>
      <Upload setFile={setFile} />
      {file &&(
      <button onClick={analyzer}>Analyze</button>)}
      {score !== null && (
        <>
          <Score score={score} />
          <Suggestions score={score} />
        </>
      )}
    </div>
  )
}

export default App