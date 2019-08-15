import React, { useState } from "react"
import * as ACTIONS from "../store/actions/actions"

import { connect } from "react-redux"
import init from '../config'
import SelectGenre from "../components/SelectGenre"
import SelectSubgenre from "../components/SelectSubgenre"
import AddSubgenre from "../components/AddSubgenre"
import Information from "../components/Information"
import Finished from "../components/Finished"

const react = "color: deepskyblue"
const redux = "color: orchid"

const Steps = ({
    selectGenre,
    selectedGenre,
    selectSubgenre,
    selectedSubgenre,
}) => {


    const [pageCount, setPageCount] = useState(1)
    console.log('PAGE COUNT', pageCount)

    const [selectedBtn, setSelectedBtn] = useState('')

    const [addSub, setAddSub] = useState(true)

    
    console.log('%cSTATE SELECTED', react, selectedBtn)

    console.log("%cSELECTED GENRE", redux, selectedGenre)
    console.log("%cAVAILABLE  SUBGENRES", redux, selectedGenre.subgenres)
    console.log("%cSELECTED  MAPPED", redux, selectedGenre && selectedGenre.subgenres.map(x => x.name))


    console.log("%cSELECTED SUBGENRE", redux, selectedSubgenre)

    return (

        <React.Fragment>

            {/* STEP 1 */}
            {(pageCount === 1) &&
                <SelectGenre
                    init={init}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn}
                    selectGenre={selectGenre}
                    selectedGenre={selectedGenre}
                />
            }

            {/* STEP 2 */}
            {pageCount === 2 &&
                <SelectSubgenre
                    addSub={addSub}
                    setAddSub={setAddSub}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                    selectedBtn={selectedBtn}
                    setSelectedBtn={setSelectedBtn}
                    
                    selectGenre={selectGenre}
                    selectedGenre={selectedGenre}

                    selectSubgenre={selectSubgenre}
                    selectedSubgenre={selectedSubgenre}
                />
            }

            {/* STEP 3 */}
            {(pageCount === 3) &&
                <AddSubgenre pageCount={pageCount} setPageCount={setPageCount} />
            }

            {/* STEP 4 */}
            {(pageCount === 1) &&
                <Information pageCount={pageCount} setPageCount={setPageCount} addSub={addSub} />
            }

            {/* STEP 5 */}
            {(pageCount === 0) &&
                <Finished pageCount={pageCount} setPageCount={setPageCount} />
            }

        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        selectedGenre: state.reducer1.selectedGenre,
        selectedSubgenre: state.reducer1.selectedSubgenre,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre)),
        selectSubgenre: (subgenre) => dispatch(ACTIONS.selectSubgenre(subgenre))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Steps)
