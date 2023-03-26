import React, { useState } from "react";
import Square from "../square/Square"

function Board (){

    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null])
    function renderSquare(i) {
        return <Square value={squares[i]} handleClick = {()=>handleClick(i)} />;
    }
    const handleClick = (i)=>{
        const copyArray = squares.slice();
        copyArray[i] = 'X';
        setSquares(copyArray)
    }

    
        const status = 'Next player: X';
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        );
      }
  
  

export default Board