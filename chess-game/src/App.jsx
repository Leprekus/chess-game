import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const testRef = useRef(null)
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
  // moves 
  // pawn = board[0 + 1][0] || board[0 + 2][0]
  // tower = {
  //   up / down = board[0 + board.length][0] || board[0 - board.length][0]
  //   left / right = board[0][board[0] + board.length] || board[0][board[0] - board.length]
  // }
  // knight = {
  //   up =  board[0 + 2][0 + 1] ||  board[0 + 2][0 - 1]
  //   down = board[0 - 2][0 + 1] || board[0 - 2][0 - 1]
  //   left = board[0 + 1][0 - 2] || board[0 - 1][0 - 2]
  //   right = board[0 + 1][0 + 2] || board[0 - 1][0 + 2]
  // }
  // bishop = {
  //   left =  board[0 - row index ][0 - row index]
  //   right = board[0 + row index ][0 + row index] 
  // }

  const coords = ['a','b','c','d','e','f','g','h']
  return (
    <div className="App">
    <div className="board" onMouseOver={getMouseCoords}>
      {
        board.map((row, x) =>
        <div key={x} className='row'>{
          row.map((tile, y) =>
          <span key={`${coords[x]}-${y}`} style={{ backgroundColor: (x + y) % 2 === 0 ? 'tomato' : 'black' }} className='tile'>
            { ` ${coords[x]}${y} ` }
          </span>)
        }</div>)
      
      }
    </div>
    <div style={{backgroundColor: 'red', position: 'absolute', width: 200, height: 200}} ref={testRef} id='test'>test</div>
    </div>
  )
}

export default App
