import React from 'react'
import uuid from 'uuid/v1'
import { Select } from 'antd'


const SelectIt = ({ options, id, placeholder, values, setValues }) => {

    const { Option } = Select

    function onChange(value, id) {
        setValues({
            ...values, [id]: value.toString()
        })
    }

    return (
        <Select
            id={id}
            showSearch
            style={{  height: "50px"}}
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={(value) => onChange(value, id)}
        >
            {
                options.map(x => <Option type = "text" key={uuid()} value={Object.keys(x).toString()}>{Object.values(x)} </Option>)
            }
        </Select>
    )
}

export default SelectIt