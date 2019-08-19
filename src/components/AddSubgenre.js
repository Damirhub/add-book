import React, { useState, useEffect } from 'react'
import { Button } from 'shards-react'
import { FormCheckbox, FormInput } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';
import { Icon } from 'antd'
import Wizard from '../containers/UI/Wizard';

const AddSubgenre = ({ pageCount, setPageCount, descriptionToggle, isChecked, ...rx }) => {

    useEffect(() => {
        rx.selectSubgenre({ name: '' })
    }, [])

    const handleChange = (e) => {
        rx.selectSubgenre({ name: e.target.value })
    }

    console.log("rx.selectSubgenre", rx.selectedSubgenre)
    return (
        <Wrapper>
            
            <Wizard pageCount = {pageCount}/>
            <FormInput
                onChange={handleChange}
                id="subgenre"
                placeholder="Subgenre name"
                className="mb-2" />

            <FormCheckbox
                checked={isChecked.checked}
                onChange={() => descriptionToggle()}
            >
                <span className="checkbox-description"> Description is required for this subgenre </span>
            </FormCheckbox>

            <Button className="buttons-nav" outline theme="secondary"
                onClick={() => setPageCount(pageCount - 1)}>
                <Icon type="left" /> BACK
            </Button>

            <Button className="buttons-nav" theme="secondary"
                disabled={rx.selectedSubgenre === undefined || rx.selectedSubgenre.name === ''}
                onClick={() => setPageCount(pageCount + 1)}> Next </Button>

        </Wrapper>
    )
}

export default AddSubgenre
