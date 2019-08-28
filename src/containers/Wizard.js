import React from 'react'
import Steps from './Steps'
import { connect } from "react-redux"
import './Wizard.css'
import Wrapper from './UI/Wrapper'


const Wizard = ({ pageCount, wizardStep, addNewSub }) => {

    return (
        <Wrapper>

            {
                pageCount !== 0 &&
                <>
                    <h5 style={{ textAlign: "left", marginBottom: "30px" }}> Add book - New book </h5>

                    <div className="wizard-container">
                        <div className={"wizard-circle" + (pageCount === 1 ? " active" : '')} >
                            <span>1</span>
                            <p>Genre</p>
                        </div>
                        <div className="wizard-dash" />
                        <div className={"wizard-circle" + (pageCount === 2 ? " active" : '')} >
                            <span>2</span>
                            <p>Subgenre</p>
                        </div>

                        <div className="wizard-dash" />
                        <div className={"wizard-circle" + (wizardStep === 3 ? " active" : '')}>
                            {
                                wizardStep !== 3 && !addNewSub && <span> ... </span>
                            }
                            {
                                (wizardStep === 3 && !addNewSub) && <><span>3</span> <p>Information</p></>
                            }
                            {
                                (!addNewSub) ? <span></span> : <><span>3</span> <p>Add new subgenre</p></>
                            }
                        </div>

                        <div className=
                            {"wizard-dash" + (!addNewSub ? " wizard-hide" : '')}
                        />
                        <div className=
                            {"wizard-circle" + (!addNewSub ? " wizard-hide" : '') + (pageCount === 4 ? " active" : '')}>
                            <span>4</span>
                            <p>Information</p>
                        </div>
                    </div>
                </>
            }
            <Steps />
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {

        wizardStep: state.wizardSteps,
        pageCount: state.pageCounter,
        addNewSub: state.addNewSub,
    }
}


export default connect(
    mapStateToProps,
)(Wizard)
