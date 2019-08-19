import React from 'react'
import { Button } from "shards-react"
import Wrapper from '../containers/UI/Wrapper';
import { Icon } from "antd"
import Wizard from '../containers/UI/Wizard';


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
            <Wizard pageCount = {pageCount}/>
            <div className="buttons-container">
                {rx.selectedGenre && rx.selectedGenre.subgenres.map(z => {
                    return (
                        <Button className="buttons" outline theme="secondary" active={(!addSub && selectedBtn) === z.name}
                            onClick={() => { rx.selectSubgenre(z); setAddSub(false); setSelectedBtn(z.name) }} key={z.id} >
                            {[z.name]}
                        </Button>)
                })
                }

                <Button className="buttons" outline theme="secondary"
                    onClick={() => setAddSub(true)} active={addSub}> Add New
            </Button>
            </div>
            <hr />
            <Button className="buttons-nav" outline theme="secondary"
                onClick={() => setPageCount(pageCount - 1)}>
                <Icon type="left" /> Back
            </Button>

            <Button className="buttons-nav" theme="secondary"
                onClick={addSub ? () => setPageCount(pageCount + 1) : () => setPageCount(pageCount + 2)}> Next
            </Button>

            <hr />

        </Wrapper>
    )
}


export default SelectSubgenre
