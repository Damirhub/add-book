import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, FormInput } from 'shards-react'
import SelectIt from '../containers/UI/Select'
import { DatePicker, Input, Icon } from 'antd'
import { options } from '../optionsConfig'
import { postData } from '../utils/fetch'

const Information = ({ isChecked, ...rx }) => {

    useEffect(() => {
        rx.wizardSteps(rx.wizardStep + 1)
        window.scrollTo(0, 0)
    }, [])

    const [values, setValues] = useState({
        genre: rx.selectedGenre.name,
        subgenre: rx.selectedSubgenre.name,
        title: '',
        author: '',
        isbn: '',
        publisher: '',
        date: '',
        number: '',
        format: '',
        edition: '',
        language: '',
        description: ''
    })

    const [loader, setLoader] = useState(false)

    const [touched, setTouched] = useState({ title: false, number: false })

    const descriptionNeeded = rx.selectedSubgenre.isDescriptionRequired

    const change = (e) => handleChange(e)


    // console.table(values)

    const handleChange = (e) => {
        const { id, value } = e.target
        setValues({
            ...values, [id]: value.toString()
        })
    }

    const handleSubmit = (values) => {
        postData(values)
    }

    const changeDate = (date, dateString) => {
        setValues({
            ...values, date: dateString
        })
    }

    const sending = () => {
        let h = ['.', '..', '...', '....'];
        let i = 0;

        setTimeout(() => {
            clearInterval(imagine)
        }, 2500)

        const imagine = setInterval(() => {
            i = (i > 3) ? 0 : i;
            console.log(`"Sending data to imaginationland" ${h[i]}`);
            i++;
        }, 500);
    };
    const required = !values.title || !values.author || !values.publisher || !values.number || !values.description

    const requiredDescription = descriptionNeeded || isChecked

    

    return (
        <>
            <Form>
                <FormGroup>
                    <label>Book Title</label>
                    <FormInput
                        onClick={() => setTouched({ ...touched, title: true })}
                        onChange={change} id="title" invalid={touched.title && values.title === ''}
                        placeholder="Book Title" className="mb-2" />

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
                        placeholder="Publisher"
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
                    <FormInput type="number"
                        onClick={() => setTouched({ ...touched, number: true })}
                        onChange={change} id="number" min="1" max="4999" invalid={touched.number && values.number === ''} placeholder="Number of pages" className="mb-2 number-input" />

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

                        {
                            (descriptionNeeded) ?
                                <>
                                    <label>Edition language</label>
                                    <Input.TextArea id="description" onChange={change} rows={4} />
                                </> :
                                isChecked &&
                                <>
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
                        rx.addNewSub ? rx.pageCounter(rx.pageCount - 1) : rx.pageCounter(rx.pageCount - 2)
                        rx.wizardSteps(rx.wizardStep - 2)
                    }
                    }>
                    <Icon type="left" /> Back
                </Button>

                <Button className="buttons-nav" theme="secondary"
                    disabled={required && requiredDescription}
                    onClick={() => {
                        sending()
                        setTimeout(() => {
                            // rx.pageCounter(0)
                            handleSubmit(values)
                        }, 3000)
                        setLoader(true)
                    }}>Add
                {loader && <Icon type="loading" style={{ fontSize: 18 }} spin />}
                </Button>
            </div>
        </>
    )
}

export default Information



