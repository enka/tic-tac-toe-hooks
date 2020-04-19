import React from 'react'

const Square = ({ value, onClick, winningSquare }) => {
  return (
    <button
      className={`square ${winningSquare ? 'winningSquare' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square
