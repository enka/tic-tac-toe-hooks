import React, { useState } from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const Game = (props) => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const [winner, winningMove] = calculateWinner(history[stepNumber])

  const handleClick = (index) => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const currentBoard = timeInHistory[stepNumber]
    const nextBoard = [...currentBoard]
    if (winner || nextBoard[index]) return
    nextBoard[index] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, nextBoard])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `MOVE #${move}` : 'MOVE #0'
      return (
        <li key={move}>
          <button className="move" onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      )
    })

  return (
    <>
      <div className="title">
        <span>{winner ? 'Winner: ' : 'Next Player: '}</span>
        <span className="player">{winner ? winner : xIsNext ? 'X' : 'O'}</span>
      </div>
      <Board
        squares={history[stepNumber]}
        winningMove={winningMove}
        onClick={handleClick}
      />
      <div className="move-list">
        <p>{renderMoves()}</p>
      </div>
    </>
  )
}

export default Game
