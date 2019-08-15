import React from 'react'
import { Button } from "shards-react"
import Wrapper from '../containers/UI/Wrapper';

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
        <Wrapper>
             <div className="buttons-container">
            {init.genres.map(x => {
                return (
                    <Button className = "buttons" outline theme = "secondary" active = {selectedBtn === x.name}
                        onClick={() => { selectGenre(x); setSelectedBtn(x.name) }} key={x.id} >
                        {x.name}
                    </Button>)
            })
            }
             </div>
            <br />

            <Button  theme = "secondary" onClick={() => { setPageCount(pageCount + 1) }} disabled={!selectedBtn}> NEXT </Button>
            <hr />
            {JSON.stringify(selectedGenre)}
        </Wrapper>
    )
}

export default SelectGenre
