import React, { useContext } from 'react'
import { ScoreContext } from '../ContextAPI/ScoreContext'

export default function End() {
  const { score } = useContext(ScoreContext)
  return (
    <div className='grow-1 flex flex-col items-center justify-center'>
      <h1>End of Quiz</h1>
      <p>Thank you for taking
        the quiz. Your score is
        {score}</p>
    </div>
  )
}
