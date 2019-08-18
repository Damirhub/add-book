import React, { useState } from 'react'
import { Button } from 'shards-react'
import { FormCheckbox, FormInput } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const AddSubgenre = ({ pageCount, setPageCount, descriptionToggle, isChecked }) => {


    // const [isChecked, setIsChecked] = useState({ checked: false })

    // console.log("CHECKED STATE", isChecked)
    // const descriptionToggle = () => {
    //     setIsChecked(prevState => ({ ...prevState, checked: !prevState.checked }));
    // };
    

    return (
        <Wrapper>
            <label> some label </label>
            <br />
            <br />

            <FormInput 
            // onChange={change} 
            id="subgenre" 
            placeholder="Subgenre name" 
            className="mb-2" />



            <FormCheckbox
                // className = "checkboxX"
                checked={isChecked.checked}
                onChange={() => descriptionToggle()}
            >
                <span className = " checkbox-description"> Description is required for this subgenre </span>
            </FormCheckbox>

            <div>
            <input type="checkbox"
            style = {{transform: "scale(1.5)", float: "left"}}
                // className = "checkboxX"
                checked={isChecked.checked}
                onChange={() => descriptionToggle()}
            />
              <span>  Description is required for this subgenre </span>
                </div>


            <Button outline theme="secondary" onClick={() => setPageCount(pageCount - 1)}> BACK </Button>

            <Button theme="secondary" onClick={() => setPageCount(pageCount + 1)}> NEXT </Button>

        </Wrapper>
    )
}

export default AddSubgenre
