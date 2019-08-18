import React, { useState } from 'react'
import uuid from 'uuid/v1'
import { Select } from 'antd'


const SelectIt = ({ options, id, placeholder, values, setValues }) => {

    const { Option } = Select;

    // console.log("INCOMING ID", id);

    function onChange(value, id) {
        setValues({
            ...values, [id]: value.toString()
        })
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        // <Select onChange={change} id={id} >
        //     {/* <option disabled selected value="">{heading}</option> */}
        //     {
        //         received.map(x => <option key={uuid()} value={Object.keys(x)}>{Object.values(x)} </option>)
        //     }
        // </Select>

        <Select
            id={id}
            showSearch
            style={{  height: "50px"}}
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={(value) => onChange(value, id)}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
        // filterOption={(input, option) =>
        //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // } 
        >
            {
                
                options.map(x => <Option type = "text" key={uuid()} value={Object.keys(x).toString()}>{Object.values(x)} </Option>)
            }
        </Select>



    )
}

export default SelectIt