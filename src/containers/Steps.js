import React, { useState } from "react"
import * as ACTIONS from "../store/actions/actions"
import { connect } from "react-redux"
import init from '../config'
import SelectGenre from "../components/SelectGenre"
import SelectSubgenre from "../components/SelectSubgenre"
import AddSubgenre from "../components/AddSubgenre"
import Information from "../components/Information"
import Finished from "../components/Finished"

const Steps = ({
    selectGenre,
    selectedGenre,
    selectSubgenre,
    selectedSubgenre,
    wizardSteps,
    wizardStep,
    pageCounter,
    pageCount,
    addNewSub,
    addNewSubSet

}) => {

    const [selectedBtn, setSelectedBtn] = useState('')
    const [isChecked, setIsChecked] = useState({ checked: false })
    
    const descriptionToggle = () => {
        setIsChecked(prevState => ({ ...prevState, checked: !prevState.checked }))
    }

    return (
        
        <React.Fragment>

            {/* STEP 1 */}
            {(pageCount === 1) &&
                <SelectGenre
                    init={init}
                    selectedBtn={selectedBtn}

                    selectGenre={selectGenre}
                    setSelectedBtn={setSelectedBtn}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    wizardStep = {wizardStep}
                    wizardSteps = {wizardSteps}
                    
                />
            }

            {/* STEP 2 */}
            {pageCount === 2 &&
                <SelectSubgenre
                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn}

                    selectedGenre={selectedGenre}

                    selectSubgenre={selectSubgenre}
                    selectedSubgenre={selectedSubgenre}

                    addNewSubSet = {addNewSubSet}
                    addNewSub = {addNewSub}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    wizardStep = {wizardStep}
                    wizardSteps = {wizardSteps}
                />
            }

            {/* STEP 3 */}
            {(pageCount === 3) &&
                <AddSubgenre
                    descriptionToggle={descriptionToggle}
                    
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}

                    selectSubgenre={selectSubgenre}
                    selectedSubgenre={selectedSubgenre}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    wizardStep = {wizardStep}
                    wizardSteps = {wizardSteps}
                />
            }

            {/* STEP 4 */}
            {(pageCount === 4) &&
                <Information
                    isChecked={isChecked.checked}
                    addNewSub = {addNewSub}

                    selectedGenre={selectedGenre}
                    selectedSubgenre={selectedSubgenre}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    wizardStep = {wizardStep}
                    wizardSteps = {wizardSteps}
                />
            }

            {/* LAST STEP */}
            {(pageCount === 0) &&
                <Finished
                    pageCount={pageCount}
                    pageCounter={pageCounter}
                />
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        selectedGenre: state.selectedGenre,
        selectedSubgenre: state.selectedSubgenre,
        wizardStep: state.wizardSteps,   
        pageCount: state.pageCounter,
        addNewSub: state.addNewSub,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre)),
        selectSubgenre: (subgenre) => dispatch(ACTIONS.selectSubgenre(subgenre)),
        wizardSteps: (wizard) => dispatch(ACTIONS.wizardSteps(wizard)),

        pageCounter: (page) => dispatch(ACTIONS.pageCounter(page)),
        addNewSubSet: (add) => dispatch(ACTIONS.addNewSub(add))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Steps)
