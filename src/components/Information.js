import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, FormInput } from 'shards-react'
import SelectIt from '../containers/UI/Select';
import { DatePicker, Input, Icon } from 'antd';
import { options } from '../optionsConfig';


const Information = ({ isChecked, ...rx }) => {

    useEffect(() => {
        rx.wizardSteps(rx.wizardStep + 1)
    }, [])

    const [values, setValues] = useState({
        genre: rx.selectedGenre.name,
        subgenre: rx.selectedSubgenre.name,
        title: false,
        author: '',
        isbn: false,
        publisher: '',
        date: '',
        number: false,
        format: '',
        edition: '',
        language: '',
        description: ''
    })

    console.table(values);

    const handleChange = (e) => {
        const { id, value } = e.target
        setValues({
            ...values, [id]: value.toString()
        })
    }

    const change = (e) => handleChange(e)

    const changeDate = (date, dateString) => {
        setValues({
            ...values, date: dateString
        })
    }
    return (
        <>
            <Form>
                <FormGroup>

                    <label>Book Title</label>
                    <FormInput onChange={change} id="title" invalid={values.title === ''} placeholder="Book Title" className="mb-2" />

                    <label>Author</label>
                    <SelectIt
                        id="author"
                        placeholder="Authors"
                        options={options.authors}
                        values={values}
                        setValues={setValues}
                    />

                    <label>ISBN</label>
                    <FormInput onChange={change} id="isbn" invalid={false} placeholder="ISBN" className="mb-2" />

                    <label>Publisher</label>
                    <SelectIt
                        id="publisher"
                        placeholder="Publishers"
                        options={options.publishers}
                        values={values}
                        setValues={setValues}
                    />

                    <label>Date published</label>
                    <DatePicker
                        className="date-picker "
                        onChange={changeDate}
                        placeholder="DD/MM/YYYY"
                        format={"DD/MM/YYYY"}
                    />
                    <br />

                    <label>Number of pages</label>
                    <FormInput type="number" onChange={change} id="number" min="1" max="4999" invalid={values.number === ''} placeholder="Number of pages" className="mb-2 number-input" />

                    <label>Format</label>
                    <SelectIt
                        id="format"
                        placeholder="Formats"
                        options={options.formats}
                        values={values}
                        setValues={setValues}
                    />

                    <div className="small-input-container" >

                        <div className="small-input-editions">
                            <label>Edition</label>
                            <FormInput id="edition" onChange={change} invalid={false} placeholder="Edition" className="mb-2" />
                        </div>

                        <div className="small-input-editions">
                            <label>Edition language</label>
                            <SelectIt
                                id="language"
                                placeholder="Languages"
                                options={options.languages}
                                values={values}
                                setValues={setValues}
                            />
                        </div>

                        {(rx.selectedSubgenre.isDescriptionRequired) ?
                            <>
                                <label>Edition language</label>
                                <Input.TextArea id="description" onChange={change} rows={4} />
                            </> :
                            isChecked && <>
                                <label>Edition language</label>
                                <Input.TextArea id="description" onChange={change} rows={4} />
                            </>
                        }
                    </div>
                </FormGroup>
            </Form>

            <div className="buttons-nav-container">

            <Button className="buttons-nav" outline theme="secondary"
                onClick={() => {
                    rx.addNewSub ? rx.pageCounter(rx.pageCount - 1) : rx.pageCounter(rx.pageCount - 2);
                    rx.wizardSteps(rx.wizardStep - 2)
                }
                }>
                <Icon type="left" /> Back
            </Button>

            <Button className="buttons-nav" theme="secondary"
                onClick={() => rx.pageCounter(0)}>Add
            </Button>

            </div>
        </>
    )
}

export default Information
