import React, { useState } from "react"
import * as ACTIONS from "../store/actions/actions"

import { connect } from "react-redux"
import init from '../config'
import SelectGenre from "../components/SelectGenre"
import SelectSubgenre from "../components/SelectSubgenre"
import AddSubgenre from "../components/AddSubgenre"
import Information from "../components/Information"
import Finished from "../components/Finished"
import Wizard from "./UI/Wizard";

const react = "color: deepskyblue"
const redux = "color: orchid"

const Steps = ({
    selectGenre,
    selectedGenre,
    selectSubgenre,
    selectedSubgenre,
    wizardSteps,
    wizardStep,
    pageCounter,
    pageCount
}) => {


    // const [pageCount, setPageCount] = useState(1)
    // console.log('PAGE COUNT', pageCount)

    const [selectedBtn, setSelectedBtn] = useState('')
    console.log('selectedBtn COUNT', selectedBtn)

    const [addSub, setAddSub] = useState(true)


    // console.log('%cSTATE SELECTED', react, selectedBtn)

    // console.log("%cSELECTED GENRE", redux, selectedGenre)
    // console.log("%cSELECTED SUBGENRE", redux, selectedSubgenre)

    const [isChecked, setIsChecked] = useState({ checked: false })
    const descriptionToggle = () => {
        setIsChecked(prevState => ({ ...prevState, checked: !prevState.checked }));
    };


    console.log("CHECKED STATE", isChecked.checked)

    return (
        // TODO: REACT MEMO
        <React.Fragment>

            {/* STEP 1 */}
            {(pageCount === 1) &&
                <SelectGenre
                    init={init}
                    selectedBtn={selectedBtn}

                    // pageCount={pageCount}
                    // setPageCount={setPageCount}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    selectGenre={selectGenre}
                    setSelectedBtn={setSelectedBtn}

                    wizardSteps = {wizardSteps}
                    wizardStep = {wizardStep}
                    
                />
            }

            {/* STEP 2 */}
            {pageCount === 2 &&
                <SelectSubgenre
                    addSub={addSub}
                    setAddSub={setAddSub}

                    // pageCount={pageCount}
                    // setPageCount={setPageCount}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn}

                    selectGenre={selectGenre}
                    selectedGenre={selectedGenre}

                    selectSubgenre={selectSubgenre}
                    selectedSubgenre={selectedSubgenre}
                    
                    wizardSteps = {wizardSteps}
                    wizardStep = {wizardStep}
                />
            }

            {/* STEP 3 */}
            {(pageCount === 3) &&
                <AddSubgenre
                    descriptionToggle={descriptionToggle}
                    
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}

                    // pageCount={pageCount}
                    // setPageCount={setPageCount}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    selectSubgenre={selectSubgenre}
                    selectedSubgenre={selectedSubgenre}

                    wizardSteps = {wizardSteps}
                    wizardStep = {wizardStep}

                />
            }

            {/* STEP 4 */}
            {(pageCount === 4) &&
                <Information
                    addSub={addSub}
                    isChecked={isChecked.checked}

                    // pageCount={pageCount}
                    // setPageCount={setPageCount}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    selectedGenre={selectedGenre}
                    selectedSubgenre={selectedSubgenre}

                    wizardSteps = {wizardSteps}
                    wizardStep = {wizardStep}
                />
            }

            {/* STEP 5 */}
            {(pageCount === 0) &&
                <Finished
                    // pageCount={pageCount}
                    // setPageCount={setPageCount}

                    pageCount={pageCount}
                    pageCounter={pageCounter}

                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn}
                    
                    
                />
            }
         {/* </Wizard> */}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        selectedGenre: state.reducer1.selectedGenre,
        selectedSubgenre: state.reducer1.selectedSubgenre,
        wizardStep: state.reducer1.wizardSteps,

        pageCount: state.reducer1.pageCounter
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre)),
        selectSubgenre: (subgenre) => dispatch(ACTIONS.selectSubgenre(subgenre)),
        wizardSteps: (wizard) => dispatch(ACTIONS.wizardSteps(wizard)),

        pageCounter: (page) => dispatch(ACTIONS.pageCounter(page))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Steps)
