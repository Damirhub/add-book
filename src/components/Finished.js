import React from 'react'

const Finished = ({ pageCount, setPageCount }) => {
    return (
        <div>
            <h1> BOOK IS ADDED </h1>
            <button onClick={() => setPageCount(pageCount + 1)}> Add another book </button>
        </div>
    )
}

export default Finished
