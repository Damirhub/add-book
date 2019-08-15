import React, { useState } from 'react'
import { Button, FormInput, FormSelect } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const Information = ({ pageCount, setPageCount, addSub }) => {

    const [value, setValue] = useState(false)

    const [values, setValues] = useState({
        one: false,
        two: '',
        three: false,
        option: '',

    })

    const [id, setId] = useState('')

    console.log("VALUES STATES", values.one, values.two, values.three, values.option)

    const bla = Object.entries(values)
    console.log('BLA', bla);


    const handleChange = (e) => {
        const { id, value } = e.target
        console.log(value)
        setValues({
            ...values, [id]: value
        })
        setId({
            id : id
        })
    }

    console.log(id)

    // const dec = {...Object.values(id)}

    // console.log("XXXXXXXXXXXX", values , ...Object.values(id))
    // const required = values + dec === '' && true

    // console.log(values.[dec])
    const notRequired = false

    const change = (e) => handleChange(e)

    return (
        <Wrapper>
            <h1> INFORMATION </h1>

            <FormInput onChange={change} id="one" invalid={values.one === '' && true} placeholder="I'm neutral" className="mb-2" />

            <FormInput onChange={change} id="two" invalid={notRequired} placeholder="Place2" className="mb-2" />

            <FormInput onChange={change} id="three" invalid={required} placeholder="Place 4" className="mb-2" />

            <FormInput onChange={change} type="number" invalid={required} placeholder="Type number" className="mb-2" />

            <FormSelect onChange={change} id="option" >
                <option value="first">This is the first option </option>
                <option value="second">This is the second option.</option>
                <option value="third">This is the third option.</option>
            </FormSelect>

            <Button outline theme="secondary" onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</Button>
            <Button theme="secondary" onClick={() => setPageCount(0)}>Add</Button>
        </Wrapper>
    )
}

export default Information
