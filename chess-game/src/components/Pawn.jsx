import { useState } from "react"
import Draggable from "react-draggable"
import blackPawn from '../assets/black_pawn.png'
const Pawn = ({ board, posX, posY, setBoard, setUpdateBoard}) => {
    const [prevX, setPrevX] = useState(null)//need to be global
    const [prevY, setPrevY] = useState(null)//need to be global
    const handleMoves = (x, y, classNameState) => {
        setBoard(prevState =>{ 
            prevState[posX][posY + 1].className = classNameState
            prevState[posX][posY + 2].className = classNameState
            return prevState 
            })
            setPrevX(x)
            setPrevY(y)
        setUpdateBoard(prevState => !prevState)    
    }
   const highlightMoves = () => {
    prevX === null && prevY === null ?
    handleMoves(posX, posY, 'active') :
    handleMoves(null, null, false)
   }
    return (
        <div onClick={highlightMoves}>
            <Draggable>
                <div className="piece">
                </div>
            </Draggable>
        </div>
    )
}

export default Pawn