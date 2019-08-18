import React, { useState } from 'react'
import { Button, Form, FormGroup, FormInput } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';
import SelectIt from '../containers/UI/Select';
import { DatePicker, Input } from 'antd';


const Information = ({ pageCount, setPageCount, addSub, isChecked, selectedGenre, selectedSubgenre }) => {


    const [values, setValues] = useState({
        genre : selectedGenre.name,
        subgenre : selectedSubgenre.name,
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

    console.log("selectedGenre fronm info",  selectedSubgenre)

    const [options] = useState({
        authors: [
            { first: "This is the first Author." },
            { second: "This is the second Author." },
            { third: "This is the third Author." },
        ],
        publishers: [
            { first: "This is the first Publisher" },
            { second: "This is the second Publisher." },
            { third: "This is the third Publisher." }
        ],
        formats: [
            { one: "First Format." },
            { two: "Second Format." },
            { three: "Third Format." },
            { four: "Fourth Format." }
        ],
        languages: [
            { english: "English" },
            { german: "German" },
            { portugese: "Portugese" },
            { italian: "Italian" },
            { russian: "Russian" },
            { japan: "Japan" }
        ]
    })

    const [id, setId] = useState('')

    // const [touched, setTouched] = useState('')

    console.log("%cVALUES STATES TABLE", "color : aqua")
    console.table(values);


    const handleChange = (e) => {
        const { id, value } = e.target
        console.log(value)
        setValues({
            ...values, [id]: value.toString()
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


    const changeDate = (date, dateString) => {
        console.log(date, dateString);
        setValues({
            ...values, date: dateString
        })
    }
    return (
        <Wrapper>
            <h1> INFORMATION </h1>

            <Form>
                <FormGroup>

                    {/* <Input onChange={change} placeholder="Basic usage" id="title" invalid= 'true' /> */}

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
                    <FormInput onChange={change} id="isbn" invalid={notRequired} placeholder="ISBN" className="mb-2" />

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
                            <FormInput id="edition" onChange={change} invalid={notRequired} placeholder="Edition" className="mb-2" />
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


                        {isChecked &&
                            <>
                                <label>Edition language</label>
                                <Input.TextArea id="description" onChange={change} rows={4} />
                            </>
                        }
                    </div>
                </FormGroup>
            </Form>


            <Button outline theme="secondary" onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</Button>
            <Button theme="secondary" onClick={() => setPageCount(0)}>Add</Button>
        </Wrapper>
    )
}

export default Information
