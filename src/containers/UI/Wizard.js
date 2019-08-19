import React from 'react'
import Steps from '../Steps'
import { connect } from "react-redux"
import * as ACTIONS from "../../store/actions/actions"
import './Wizard.css'
import Wrapper from './Wrapper';


const Wizard = ({ pageCount, pageCounter, wizardStep }) => {

    // TODO: make modules from wizard css

    console.log("%c PAGE COUNT FROM WIZARD", "color: aqua", pageCount)
    return (
        <Wrapper>
            {
                pageCount !== 0 &&
                <h1 style={{ "background": "red" }} >{wizardStep} </h1>
            }

            {
                pageCount !== 0 &&
                <h1 style={{ "background": "red" }} >{wizardStep} </h1>
            }

<div className = "wizard-container">
            <div className = "wizard-circle">1
                <p>Genre</p>
            </div>
            <div className = "wizard-dash"/>
            <div className = "wizard-circle">2
                 <p>Subgenre</p>
            </div>
            <div className = "wizard-dash"/>
            <div className = "wizard-circle">3
                <p>Add new subgenre</p>

            
            </div>
            <div className = "wizard-dash"/>
            <div className = "wizard-circle">4
             <p>Information</p>
            
            </div>
</div>

{/* <button onClick = { () => pageCounter(1)} >  NUSSUSSU </button>
<button onClick = { () => pageCounter(2)} >  NUSSUSSU </button>
<button onClick = { () => pageCounter(3)} >  NUSSUSSU </button>
<button onClick = { () => pageCounter(4)} >  NUSSUSSU </button> */}
            

            <Steps />
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {

        wizardStep: state.reducer1.wizardSteps,
        pageCount: state.reducer1.pageCounter
    }
}

// const mapDispatchToProps = dispatch => {
//     return {


//         pageCounter: (page) => dispatch(ACTIONS.pageCounter(page))
//     }
// }


export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Wizard)
