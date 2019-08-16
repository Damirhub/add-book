import React, { useState } from 'react'
import uuid from 'uuid/v1'
import { Button, Form, FormGroup, FormInput, FormSelect } from 'shards-react'
import DatePicker from 'react-datepicker'
import Wrapper from '../containers/UI/Wrapper';


const SelectIt = ({ received, id, change, heading }) => {
    return (
        <FormSelect onChange={change} id={id} >
            <option disabled selected value="">{heading}</option>
            {
                received.map(x => <option key={uuid()} value={Object.keys(x)}>{Object.values(x)} </option>)
            }
        </FormSelect>
    )
}

// {values.title === '' && true}

const TextIn = ({ change, id, invalid, placeholder }) => {
    return (
        <FormInput onChange={change} id={id} invalid={invalid} placeholder={placeholder} className="mb-2" />
    )
}


const Information = ({ pageCount, setPageCount, addSub }) => {


    const [values, setValues] = useState({
        title: false,
        author: '',
        isbn: false,
        publisher: '',
        number: false,
        format: '',
        edition: '',
        language: ''
    })

    const [options] = useState({
        authors: [
            { first: "This is the first Author." },
            { second: "This is the second Author." },
            { third: "This is the third Author." },
        ],
        publishers: [
            { first: "This is the first Publisher " },
            { second: "This is the second Publisher." },
            { third: "This is the third Publisher." }
        ],
        formats: [
            { one: "First Format. " },
            { two: "Second Format. " },
            { three: "Third Format. " },
            { four: "Fourth Format. " }
        ],
        languages: [
            { english: "English " },
            { german: "German " },
            { portugese: "Portugese " },
            { italian: "Italian " },
            { russian: "Russian " },
            { japan: "Japan " }
        ]
    })


    const [id, setId] = useState('')
    const [startDate, setStartDate] = useState(Date.now());

    // const [touched, setTouched] = useState('')

    console.log("%cVALUES STATES TABLE", "color : aqua")
    console.table(values);


    const handleChange = (e) => {
        const { id, value } = e.target
        console.log(value)
        setValues({
            ...values, [id]: value
        })
        // setId({
        //     id: id
        // })
        // setTouched({touched: true})
    }


    console.log("TEXT ID IS : ", id)

    // const sid = Object.values(id) 

    // const required =  values[ `${sid}`] === ''

    const change = (e) => handleChange(e)
    const notRequired = false


    const changeDate = (time) => {
        setStartDate(time)
        try { console.log(time) }
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <Wrapper>
            <h1> INFORMATION </h1>


            <Form>
                <FormGroup>


                    <DatePicker
                        // selected={startDate}
                        value="DD/MM/YY"
                        onChange={changeDate}
                    />

                    <label>Book Title</label>
                    {/* <FormInput onChange={change} id="title" invalid={values.title === ''} placeholder="Book Title" className="mb-2" /> */}

                    <TextIn change={change} id="title" invalid={values.title === ''} placeholder="Book Title" />

                    <label>Author</label>

                    <SelectIt id="author" heading="Author" received={options.authors} change={change} />

                    <label>ISBN</label>
                    <FormInput onChange={change} id="isbn" invalid={values.isbn === ''} placeholder="ISBN" className="mb-2" />

                    <label>Publisher</label>

                    <SelectIt id="publisher" heading="Publishers" received={options.publishers} change={change} />

                    <h3> INSERT DATEPICKER HERE </h3>

                    {/* 
                        TODO: insert datepicker
                    */}
                    <label>Number of pages</label>
                    <FormInput type="number" onChange={change} id="number" min="1" max="4999" invalid={values.number === ''} placeholder="Number of pages" className="mb-2 number-input" />

                    {/* 
                        TODO: number of pages cut on validation
                    */}

                    <label>Format</label>
                    <SelectIt id="format" heading="formats" received={options.formats} change={change} />

                    <div className="small-input-container" >

                        <div className="small-input-editions">
                            <label>Edition</label>
                            <FormInput id="edition" onChange={change} invalid={notRequired} placeholder="Edition" className="mb-2" />
                        </div>

                        <div className="small-input-editions">

                            <label>Edition language</label>
                            <SelectIt id="language" heading="Edition language" received={options.languages} change={change} />

                        </div>

                        {/* 
                        TODO: insert description textbox
                        */}


                    </div>
                </FormGroup>
            </Form>


            <Button outline theme="secondary" onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</Button>
            <Button theme="secondary" onClick={() => setPageCount(0)}>Add</Button>
        </Wrapper>
    )
}

export default Information
