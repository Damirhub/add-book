import React, { useEffect } from 'react'
import { Button } from "shards-react"
import Wrapper from '../containers/UI/Wrapper';
import Wizard from '../containers/UI/Wizard';

const SelectGenre = ({
    init,
    pageCount,
    setPageCount,
    selectedBtn,
    setSelectedBtn,
    selectGenre,
}) => {

    useEffect(() => {
        setSelectedBtn('')
    }, [])

    return (
        <Wrapper>
            <Wizard pageCount = {pageCount}/>
            <div className="buttons-container">
                {init.genres.map(x => {
                    return (
                        <Button className="buttons" outline theme="secondary" active={selectedBtn === x.name}
                            onClick={() => { selectGenre(x); setSelectedBtn(x.name) }} key={x.id} >
                            {x.name}
                        </Button>)
                })
                }
            </div>


            <Button className="buttons-nav" theme="secondary"
                disabled={!selectedBtn}
                // disabled={selectedGenre.name === '' || !selectedBtn}
                onClick={() => { setPageCount(pageCount + 1) }} > Next
            </Button>

        </Wrapper>
    )
}

export default SelectGenre
