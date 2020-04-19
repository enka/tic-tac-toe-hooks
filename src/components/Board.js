import React from 'react'
import Square from './Square'

const Board = ({ squares, winningMove, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onClick(index)}
          winningSquare={winningMove.includes(index)}
        />
      ))}
    </div>
  )
}

export default Board
