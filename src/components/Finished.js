import React from 'react'
import { Button } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';

const Finished = ({ pageCount, setPageCount }) => {
    return (
        <Wrapper>
            <h1> BOOK IS ADDED </h1>
            <Button theme="secondary"  onClick={() => setPageCount(pageCount + 1)}> Add another book </Button>
        </Wrapper>
    )
}

export default Finished
