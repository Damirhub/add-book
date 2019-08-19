import React, { useState } from 'react'
import { Button, Form, FormGroup, FormInput } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';
import SelectIt from '../containers/UI/Select';
import { DatePicker, Input, Icon } from 'antd';
import { options } from '../optionsConfig';
import Wizard from '../containers/UI/Wizard';

// TODO: isDescriptionRequired

const Information = ({ pageCount, setPageCount, addSub, isChecked, ...rx }) => {


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
        console.log(date, dateString);
        setValues({
            ...values, date: dateString
        })
    }
    return (
        <Wrapper>

            <Wizard pageCount={pageCount} />

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

                        {console.log("REQUIRED DESC? ", rx.selectedSubgenre.isDescriptionRequired)}
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


            <Button className="buttons-nav" outline theme="secondary"
                onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>
                <Icon type="left" /> Back
            </Button>

            <Button className="buttons-nav" theme="secondary"
                onClick={() => setPageCount(0)}>Add
            </Button>
        </Wrapper>
    )
}

export default Information
