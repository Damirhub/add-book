import React from 'react'
import { Button } from 'shards-react'
import Wrapper from '../containers/UI/Wrapper';
import { Icon } from 'antd'

const Finished = ({ pageCount, setPageCount }) => {
    return (
        <Wrapper>
            <div className="circle">
                <Icon className="check-icon" type="check" />
            </div>
            <h6 style={{ "marginBottom": "40px" }}> Book added successfully </h6>

            <Button className="add-another" theme="secondary" onClick={() => setPageCount(pageCount + 1)}> Add another book </Button>
        </Wrapper>
    )
}

export default Finished
