import React from 'react'

const SelectSubgenre = ({
    addSub,
    setAddSub,
    pageCount,
    setPageCount,
    selectedBtn,
    setSelectedBtn,
    ...rx
}) => {
    console.log('SELECTED SUBGENRE', rx.selectedSubgenre)
    return (
        <div>
            {rx.selectedGenre && rx.selectedGenre.subgenres.map(z => {
                return (
                    <button className={(!addSub && selectedBtn) === z.name ? "button-color" : ''}
                        onClick={() => { rx.selectSubgenre(z); setAddSub(false); setSelectedBtn(z.name) }} key={z.id} >
                        {[z.name]}
                    </button>)
            })
            }
            
            <button onClick={() => setAddSub(true)} className={addSub ? "button-color" : ''}>Add Subgenre</button>
            <hr />
            <button onClick={() => setPageCount(pageCount - 1)}>BACK</button>

            <button onClick={addSub ? () => setPageCount(pageCount + 1) : () => setPageCount(pageCount + 2)}> NEXT </button>

            <hr />
            {JSON.stringify(rx.selectedSubgenre)}

        </div>
    )
}


export default SelectSubgenre
