import React from 'react'
import { Button } from "shards-react"
import Wrapper from '../containers/UI/Wrapper';
import { Icon } from "antd"


const SelectSubgenre = ({
    addSub,
    setAddSub,
    pageCount,
    setPageCount,
    selectedBtn,
    setSelectedBtn,
    ...rx
}) => {
    rx.wizardSteps(pageCount)

    console.log('SELECTED SUBGENRE', rx.selectedSubgenre)
    return (
        <>
            <div className="buttons-container">
                {rx.selectedGenre && rx.selectedGenre.subgenres.map(z => {
                    return (
                        <Button className="buttons" outline theme="secondary" active={(!addSub && selectedBtn) === z.name}
                            onClick={() => {
                                rx.selectSubgenre(z);
                                // rx.wizardSteps(3); 
                                setAddSub(false); setSelectedBtn(z.name)
                            }} key={z.id} >
                            {[z.name]}
                        </Button>)
                    })
                }

                <Button className="buttons" outline theme="secondary"
                    onClick={() => {
                        setAddSub(true);
                        //  rx.wizardSteps(4)
                    }} active={addSub}> Add New
            </Button>
            </div>
            <hr />
            <Button className="buttons-nav" outline theme="secondary"
                onClick={() => rx.pageCounter(pageCount - 1)}>
                <Icon type="left" /> Back
            </Button>

            <Button className="buttons-nav" theme="secondary"
                onClick={addSub ? () => rx.pageCounter(pageCount + 1) : () => rx.pageCounter(pageCount + 2)}> Next
            </Button>

        </>
    )
}


export default SelectSubgenre
