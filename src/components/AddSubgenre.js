import React from 'react'

const AddSubgenre = ({ pageCount, setPageCount }) => {
    return (
        <div>
            <label> some label </label>
            <br />
            <input type="text" placeholder="Subgenre name" />
            <br />
            <input type="checkbox" value={true} />
            <label>Description is required for this subgenre</label>
            <br />

            <button onClick={() => setPageCount(pageCount - 1)}> BACK </button>

            <button onClick={() => setPageCount(pageCount + 1)}> NEXT </button>

        </div>
    )
}

export default AddSubgenre
