import React, { useState } from 'react'

export default function CondRendering() {

    // state
    const [show, setShow] = useState(true)
    const [loading, setLoading] = useState(true)

    //toggle function
    const toggleShow = () => { setShow(!show) }

    if (loading) {
        return <div> Loading Please wait.. </div>
    }

    return (
        <div>
            {/* {show === true ? <h1>Show / Hide me</h1> : null} */}
            {show ? <h1>Show / Hide me</h1> : null}
            {/* {show && <h1>Show / Hide me</h1>} */}

            <button onClick={toggleShow}>toggle</button>
        </div>
    )
}
