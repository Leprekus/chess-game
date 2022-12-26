import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const board = [

      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
  ]
  //

  const coords = ['a','b','c','d','e','f','g','h']
  return (
    <div className="App">
    <div class="board">
      {
        board.map((row, x) =>
        <div key={row} className='row'>{
          row.map((tile, y) =>
          <span key={`${coords[x]}-${y}`} style={{ backgroundColor: (x + y) % 2 === 0 ? 'tomato' : 'black' }} className='tile'>
            { ` ${coords[x]}${y} ` }
          </span>)
        }</div>)
      
      }
    </div>
    </div>
  )
}

export default App
