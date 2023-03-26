import React, { useState } from "react";

function Square(props) {
    const [player, setPlayer] = useState(null)``

    return (
        <button className="square" onClick={() => props.handleClick()}>
            {props.value}
        </button>
    );
}

export default Square;