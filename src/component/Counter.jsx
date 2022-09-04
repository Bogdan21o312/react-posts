import React, { useState } from "react";

const Conunter = function () {
    const [conunter, setCounte] = useState(0)


    function Increment() {
        setCounte(conunter + 1)
    }

    function Decrement() {
        setCounte(conunter - 1)
    }

    return (
        <div>
            <h1>{conunter}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )

}

export default Conunter;