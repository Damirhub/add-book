import React, { useState } from 'react'
import { Button, Form, FormGroup, FormInput, FormSelect } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const Information = ({ pageCount, setPageCount, addSub }) => {

    const [value, setValue] = useState(false)

    const [values, setValues] = useState({
        title: false,
        author: '',
        isbn: false,
        publisher: '',
        number: '',
        format: '',

    })

    const [authors] = useState([
          { first :  "This is the first Author."},
          { second : "This is the second Author."},
          { third :  "This is the third Author."},
    ])

    const [publishers] = useState([
            { first : "This is the first Publisher "},
            { second : "This is the second Publisher."},
            { third : "This is the third Publisher."}
  ])
  const [formats] = useState([
            { first :"First Format. "},
            { second :"Second Format. "},
            { third : "Third Format. "},
            { fourth : "Fourth Format. "}
  ])

  const [languages] = useState([
    { first :"English "},
    { second :"German "},
    { third : "Portugese "},
    { fourth : "Italian "},
    { fifth : "Russian "}
])

    
    const [id, setId] = useState('')

    console.log("VALUES STATES", values.title, values.author, values.isbn, values.publisher, values.number, values.format, )

    const bla = Object.entries(values)
    console.log('BLA', bla);


    const handleChange = (e) => {
        const { id, value } = e.target
        console.log(value)
        setValues({
            ...values, [id]: value
        })
        setId({
            id: id
        })
    }

    console.log(id)

    const notRequired = false

    const change = (e) => handleChange(e)
    const optionValue = "ratatatira"

    return (
        <Wrapper>
            <h1> INFORMATION </h1>


            <Form>
                <FormGroup>
                    <label>Book Title</label>
                    <FormInput onChange={change} id="title" invalid={values.title === '' && true} placeholder="Book Title" className="mb-2" />

                    <label>Author</label>

                    <FormSelect  onChange={change} id="author" >
                    <option disabled selected defaultValue="">Author</option>
                        {authors.map( author => <option value={ Object.keys(author)}>{Object.values(author)} </option>) }
                    </FormSelect>

                    <label>ISBN</label>
                    <FormInput onChange={change} id="isbn" invalid={notRequired} placeholder="ISBN" className="mb-2" />

                    <label>Publisher</label>
                    <FormSelect onChange={change} id="publisher" >
                        <option disabled selected value="">Publisher</option>
                        {publishers.map( publisher => <option value={ Object.keys(publisher)}>{Object.values(publisher)} </option>) }
                    </FormSelect>

                    <h3> INSERT DATEPICKER HERE </h3>

                    {/* 
                        TODO: insert datepicker
                    */}
                    <label>Number of pages</label>
                    <FormInput type = "number" onChange={change} id="three" invalid={values.three === '' && true} placeholder="Number of pages" className="mb-2 number-input" />

                    <label>Format</label>
                    <FormSelect onChange={change} id="format" className="small-input">
                        <option disabled selected value="">Format</option>
                        {formats.map( format => <option value={ Object.keys(format)}>{Object.values(format)} </option>) }
                    </FormSelect>

                    <div className = "small-input-container" >

                        <div className = "small-input-editions">
                            <label>Edition</label>
                            <FormInput onChange={change} invalid={notRequired} placeholder="Edition" className="mb-2" />
                        </div>

                        <div className = "small-input-editions">

                            <label>Edition language</label>

                            <FormSelect onChange={change} id="format">
                            <option disabled selected value="">Format</option>
                            {languages.map( language => <option value={ Object.keys(language)}>{Object.values(language)} </option>) }
                        </FormSelect>
                        </div>
                    </div>
                </FormGroup>
            </Form>


            <Button outline theme="secondary" onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</Button>
            <Button theme="secondary" onClick={() => setPageCount(0)}>Add</Button>
        </Wrapper>
    )
}

export default Information
