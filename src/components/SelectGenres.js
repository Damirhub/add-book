import React, { useState } from "react";
import * as ACTIONS from "../store/actions/actions";

import { connect } from "react-redux";
import init from '../config'
import AddSubgenre from "./AddSubgenre";

const SelectGenres = ({

    selectGenre,
    selectedGenre
}) => {

    const [pageCount, setPageCount] = useState(1)

    console.log('PAGE COUNT', pageCount);

    const [selected, setSelected] = useState('')

    const [add, setAdd] = useState(true)

    console.log('%cSTATE SELECTED', 'color: deepskyblue', selected);



    console.log("%cSELECTE", "color: orchid", selectedGenre)
    console.log("%cSELECTED  SUBGENRE", "color: orchid", selectedGenre.subgenres)
    console.log("%cSELECTED  MAPPED", "color: orchid", selectedGenre && selectedGenre.subgenres.map(x => x.name))

    return (

        <React.Fragment>
            {
                (pageCount === 1 ) &&
                <div style={{ "background": "red" }}>
                    {init.genres.map(x => {
                        return (
                            <button className={selected === x.name ? "button-color" : ''}
                                onClick={() => { selectGenre(x); setSelected(x.name) }} key={x.id} >
                                {x.name}
                            </button>)
                    })
                    }
                    <br />
                    <button onClick={() => { setPageCount(pageCount + 1) }} disabled={!selected}> NEXT </button>

                </div>
            }

            {/* PAGE 2 wizard */}

            {pageCount === 2 &&
                <div>
                    {selectedGenre && selectedGenre.subgenres.map(z => {
                        return (
                            <button className={(!add && selected) === z.name ? "button-color" : ''}
                                onClick={() => { setAdd(false); setSelected(z.name); }} key={z.id} >
                                {[z.name]}
                            </button>)
                    })
                    }

                    <hr />

                    <button onClick={() => setPageCount(pageCount - 1)}>BACK</button>

                    <button onClick={() => setPageCount(pageCount + 1)}> NEXTA </button>

                    <button onClick={() => setAdd(true)} className={add ? "button-color" : ''}>ADD</button>

                </div>
            }

            {(pageCount === 3 && add) &&
                    <AddSubgenre/>
            }

            {(pageCount === 3 && !add) &&
                <div>
                    NOT ADD addDDD
                </div>
            }

        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        selectedGenre: state.example.selectedGenre
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectGenres);
