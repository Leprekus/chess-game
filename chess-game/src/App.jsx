import { useRef, useMemo, useState } from 'react'
import Draggable from 'react-draggable'
import reactLogo from './assets/react.svg'
import './App.css'
import Pawn from './components/Pawn'
function App() {
  const [updateBoard, setUpdateBoard] = useState(false)
  const [board, setBoard] = useState([
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
    [{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false},{className: false}],
  ])
  useMemo(() => {
      if(updateBoard) {
        setUpdateBoard(!updateBoard)
      }

  }, [updateBoard])
  const showMoves = () => {
    setBoard((prevState) => {
      prevState[2 + 1][5].className = 'active'
      prevState[2 + 2][5].className = 'active'
      return prevState
    })
    setUpdateBoard(!updateBoard)
 }
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
    <div className="board">
      {
        board.map((row, x) =>
        <div key={x} className='row'>{

          row.map((tile, y) =>
          <span key={`${coords[x]}-${y}`} style={{ backgroundColor: (x + y) % 2 === 0 ? 'tomato' : 'black' }} className={`tile ${board[x][y].className}`} onClick={showMoves}>
            { `${coords[x]}${y}` === 'b4' ? <Pawn board={board} posX={x} posY={y} setBoard={setBoard}/> : ` ${coords[x]}${y} ` }
          </span>)

        }</div>)
      
      }
    </div>
    <Draggable>
      <div style={{backgroundColor: 'red', position: 'absolute', width: 200, height: 200}} id='test'>test</div>
    </Draggable>
    </div>
  )
}

export default App
