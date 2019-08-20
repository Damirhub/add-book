import React from 'react'
import { Button } from 'shards-react'
import { Icon } from 'antd'

export const Finished = ({ ...rx }) => {
    return (
        <>
            <div className="circle">
                <Icon className="check-icon" type="check" />
            </div>
            <h6 style={{ "marginBottom": "40px" }}> Book added successfully </h6>

            <Button className="add-another" theme="secondary" onClick={() => rx.pageCounter(rx.pageCount + 1)}> Add another book </Button>
        </>
    )
}

export default Finished
