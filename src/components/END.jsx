import React, { useContext } from 'react'
import { ScoreContext } from '../ContextAPI/ScoreContext'

export default function End() {
  const { score } = useContext(ScoreContext)
  return (
    <div>
      <h1>End of Quiz</h1>
      <p>Thank you for taking
        the quiz. Your score is
        {score}</p>
    </div>
  )
}
