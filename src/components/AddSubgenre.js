import React, { useState, useEffect } from 'react'
import { Button } from 'shards-react'
import { FormCheckbox, FormInput } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';
import { Icon } from 'antd'

const AddSubgenre = ({ pageCount, setPageCount, descriptionToggle, isChecked, setIsChecked, ...rx }) => {

    useEffect(() => {
        rx.selectSubgenre({ name: '' })
        setIsChecked({checked : false})
        // rx.wizardSteps(rx.wizardStep + 1)
    }, [])
    
    rx.wizardSteps(pageCount)

    const handleChange = (e) => {
        rx.selectSubgenre({ name: e.target.value })
    }

    console.log("rx.selectSubgenre", rx.selectedSubgenre)
    return (
        <>          
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
                onClick={() => rx.pageCounter(pageCount - 1)}>
                <Icon type="left" /> BACK
            </Button>

            <Button className="buttons-nav" theme="secondary"
                disabled={rx.selectedSubgenre === undefined || rx.selectedSubgenre.name === ''}
                onClick={() => rx.pageCounter(pageCount + 1)}> Next </Button>
        </>
    )
}

export default AddSubgenre
