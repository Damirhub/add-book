import React from 'react'

const Information = ({ pageCount, setPageCount, addSub }) => {

    return (
        <div>
            <h1> INFORMATION </h1>
            <button onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</button>
            <button onClick={() => setPageCount(0)}>Add</button>
        </div>
    )
}

export default Information
