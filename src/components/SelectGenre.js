import React from 'react'

const SelectGenre = ({
    init,
    pageCount,
    setPageCount,
    selectedBtn,
    setSelectedBtn,
    selectGenre,
    selectedGenre,
}) => {
    return (
        <div>
            {init.genres.map(x => {
                return (
                    <button className={selectedBtn === x.name ? "button-color" : ''}
                        onClick={() => { selectGenre(x); setSelectedBtn(x.name) }} key={x.id} >
                        {x.name}
                    </button>)
            })
            }
            <br />

            <button onClick={() => { setPageCount(pageCount + 1) }} disabled={!selectedBtn}> NEXT </button>
            <hr />
            {JSON.stringify(selectedGenre)}
        </div>
    )
}

export default SelectGenre
