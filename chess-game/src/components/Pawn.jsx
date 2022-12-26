import Draggable from "react-draggable"
import blackPawn from '../assets/black_pawn.png'
const Pawn = () => {
    return (
        <div>
            <Draggable>
                <div className="piece">
                </div>
            </Draggable>
        </div>
    )
}

export default Pawn