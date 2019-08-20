import React, { useState, useEffect } from 'react'
import { Button } from "shards-react"
import { Icon } from "antd"


const SelectSubgenre = ({
    selectedBtn,
    setSelectedBtn,
    ...rx
}) => {
    const [enabled, setEnabled] = useState(false)

    rx.wizardSteps(rx.pageCount)

    useEffect(() => {
        rx.addNewSubSet('')
    }, [])

    console.log("RXXXRR", rx.addNewSub)
    return (
        <>
            <div className="buttons-container">
                {rx.selectedGenre && rx.selectedGenre.subgenres.map(z => {
                    return (
                        <Button className="buttons" outline theme="secondary" active={(!rx.addNewSub && selectedBtn) === z.name}
                            onClick={() => {
                                setEnabled(true)
                                rx.selectSubgenre(z);
                                rx.addNewSubSet(false); setSelectedBtn(z.name)
                            }} key={z.id} >
                            {[z.name]}
                        </Button>
                    )
                })
                }
                <Button className="buttons" outline theme="secondary"
                    active={rx.addNewSub}
                    onClick={() => {
                        setEnabled(true)
                        rx.addNewSubSet(true)
                    }}
                > Add New
            </Button>
            </div>

            <div className="buttons-nav-container">

                <Button className="buttons-nav" outline theme="secondary"
                    onClick={() => rx.pageCounter(rx.pageCount - 1)}>
                    <Icon type="left" /> Back
            </Button>

                <Button className="buttons-nav" theme="secondary"
                    disabled={!enabled}
                    onClick={rx.addNewSub ? () => rx.pageCounter(rx.pageCount + 1) : () => rx.pageCounter(rx.pageCount + 2)}> Next
            </Button>
            </div>
        </>
    )
}


export default SelectSubgenre
