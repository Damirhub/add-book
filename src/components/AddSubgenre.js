import React, { useEffect } from 'react'
import { Button } from 'shards-react'
import { FormCheckbox, FormInput } from 'shards-react'
import { Icon } from 'antd'

const AddSubgenre = ({ descriptionToggle, isChecked, setIsChecked, ...rx }) => {

    useEffect(() => {
        rx.selectSubgenre({ name: '' })
        setIsChecked({ checked: false })
    }, [])

    rx.wizardSteps(rx.pageCount)

    const handleChange = (e) => {
        rx.selectSubgenre({ name: e.target.value })
    }

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

            <div className="buttons-nav-container">
                <Button className="buttons-nav" outline theme="secondary"
                    onClick={() => rx.pageCounter(rx.pageCount - 1)}>
                    <Icon type="left" /> Back
            </Button>

                <Button className="buttons-nav" theme="secondary"
                    disabled={rx.selectedSubgenre === undefined || rx.selectedSubgenre.name === ''}
                    onClick={() => rx.pageCounter(rx.pageCount + 1)}> Next </Button>
            </div>
        </>
    )
}

export default AddSubgenre
