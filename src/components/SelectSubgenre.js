import React from 'react'
import { Button } from "shards-react"
import Wrapper from '../containers/UI/Wrapper';


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
        <Wrapper>
            {rx.selectedGenre && rx.selectedGenre.subgenres.map(z => {
                return (
                    <Button outline theme="secondary" active={(!addSub && selectedBtn) === z.name}
                        onClick={() => { rx.selectSubgenre(z); setAddSub(false); setSelectedBtn(z.name) }} key={z.id} >
                        {[z.name]}
                    </Button>)
            })
            }

            <Button outline theme="secondary" onClick={() => setAddSub(true)} active={addSub}> Add Subgenre </Button>
            <hr />
            <Button outline theme="secondary" onClick={() => setPageCount(pageCount - 1)}> BACK </Button>

            <Button theme="secondary" onClick={addSub ? () => setPageCount(pageCount + 1) : () => setPageCount(pageCount + 2)}> NEXT </Button>

            <hr />
            {JSON.stringify(rx.selectedSubgenre)}

        </Wrapper>
    )
}


export default SelectSubgenre
