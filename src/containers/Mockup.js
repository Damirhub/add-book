import React, { useState } from "react"
import * as ACTIONS from "../store/actions/actions"
import { failure } from "../store/actions/actions"

import { connect } from "react-redux"
import init from '../config'

const Mockup = ({
    stateprop1,
    stateprop2,
    action_creator1,
    action_creator2,
    user_input,
    input_text,

    selectGenre,
    selectedGenre
}) => {

    const add = true

    console.log("%cSELECTED", "color: orchid", selectedGenre)
    console.log("%cSELECTED  SUBGENRE", "color: orchid", selectedGenre.subgenres)
    console.log("%cSELECTED  MAPPED",  "color: orchid", selectedGenre && selectedGenre.subgenres.map(x => x.name))
    return (
        <>


            {init.genres.map(x => {
                return (
                    <button onClick={() => selectGenre(x)} key={x.id} >
                        {x.name}
                    </button>)
            })}
            <hr />
            {selectedGenre && selectedGenre.subgenres.map(z => {
                return (
                    <button key={z.id} >
                        {[z.name]}
                    </button>)
            })}

            <hr/>


            {add && <button>Add</button>}


            <h4>stateprop1: {stateprop1.toString()}</h4>

            <hr />
            <button onClick={() => action_creator1()}>Action Creator 1 </button>
            <button onClick={action_creator2}>Action Creator 2 </button>
            <hr />
            <form>
                <input
                    onChange={e => {
                        user_input(e.target.value)
                    }}
                    placeholder="user input"
                />
            </form>
            <br />
            <h3>{input_text}</h3>
            <hr />
            {stateprop2}
        </>
    )
}

const mapStateToProps = state => {
    return {
        stateprop1: state.example.stateprop1,
        stateprop2: state.example2.stateprop2,
        input_text: state.example2.user_input,

        selectedGenre: state.example.selectedGenre

    }
}

const mapDispatchToProps = dispatch => {
    return {

        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(failure()),

        user_input: whatever => dispatch(ACTIONS.user_input(whatever)),

        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mockup)