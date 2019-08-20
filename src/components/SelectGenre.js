import React, { useEffect } from 'react'
import { Button } from "shards-react"

const SelectGenre = ({
    init,   
    selectedBtn,
    setSelectedBtn,
    selectGenre,
    ...rx
}) => {

    useEffect(() => {
        setSelectedBtn('')
    }, [])

    rx.wizardSteps(rx.pageCount)

    return (
        <>
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
                onClick={() => { rx.pageCounter(rx.pageCount + 1) }} > Next
            </Button>
        </>
    )
}

export default SelectGenre
