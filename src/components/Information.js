import React from 'react'
import { Button } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const Information = ({ pageCount, setPageCount, addSub }) => {

    return (
        <Wrapper>
            <h1> INFORMATION </h1>
            <Button outline theme="secondary"onClick={() => addSub ? setPageCount(pageCount - 1) : setPageCount(pageCount - 2)}>BACK</Button>
            <Button theme="secondary" onClick={() => setPageCount(0)}>Add</Button>
        </Wrapper>
    )
}

export default Information
