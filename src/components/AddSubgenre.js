import React, { useState } from 'react'
import { Button } from 'shards-react'
import { FormCheckbox } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const AddSubgenre = ({ pageCount, setPageCount }) => {


    const [state, setState] = useState({ checked: false })

    const handleToggle = () => {
        setState(prevState => ({ ...prevState, checked: !prevState.checked }));
    };

    return (
        <Wrapper>
            <label> some label </label>
            <br />
            <input type="text" placeholder="Subgenre name" />
            <br />

            <br />

            <FormCheckbox
                className = "checkboxX"
                checked={state.checked}
                onChange={() => handleToggle()}
            >

                Description is required for this subgenre
            </FormCheckbox>


            <Button outline theme="secondary" onClick={() => setPageCount(pageCount - 1)}> BACK </Button>

            <Button theme="secondary" onClick={() => setPageCount(pageCount + 1)}> NEXT </Button>

        </Wrapper>
    )
}

export default AddSubgenre
