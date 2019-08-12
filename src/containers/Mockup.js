import React, { useState } from "react";
import * as ACTIONS from "../store/actions/actions";
import { failure } from "../store/actions/actions";

import { connect } from "react-redux";
import init from '../config'

const Mockup = ({
    stateprop1,
    stateprop2,
    action1,
    action2,
    action_creator1,
    action_creator2,
    user_input,
    input_text,

    selectGenre,
    selectedGenre
}) => {


    const [genre, setGenre] = useState('')


    console.log("GENRE", genre)
    console.log("GENRE SUB", genre.subgenres)
    // console.log( init.genres.map((x, y) => { x[y] })   )
    console.log("SELECTED from reducer", selectedGenre)
    console.log("SELECTED from reducer SUB", selectedGenre.subgenres)


    console.log("SELECTED from GENRE MAP", genre && genre.subgenres.map(x => x.name))
    console.log("SELECTED from reducer MAP", selectedGenre && selectedGenre.subgenres.map(x => x.name))
    return (
        <>


            {init.genres.map(x => {
                return (
                    <button onClick={() => selectGenre(x)} key={x.id} >
                        {x.name}
                    </button>)
            })}

            {selectedGenre && selectedGenre.subgenres.map(z => {
                return (
                    <button key={z.id} >
                        {[z.name]}
                    </button>)
            })}



            {init.genres.map(x => {
                return (
                    <button onClick={() => setGenre(x)} key={x.id} >
                        {x.name}
                    </button>)
            })}
            <hr />
            {genre && genre.subgenres.map(z => {
                return (
                    <button key={z.id} >
                        {z.name}
                    </button>)
            })}



            <h4>Get State: {stateprop1.toString()}</h4>
            <br />
            <button onClick={() => action1()}>Dispatch Action 1</button>
            <button onClick={() => action2()}>Dispatch Action 2</button>
            <hr />
            <button onClick={() => action_creator1()}>Action Creator 1 </button>
            <button onClick={action_creator2}>Action Creator 2 </button>
            <hr />
            <form>
                <input
                    onChange={e => {
                        user_input(e.target.value);
                    }}
                    placeholder="user input"
                />
            </form>
            <br />
            <h3>{input_text}</h3>
            <hr />
            {stateprop2}
            {selectedGenre}
        </>
    );
};

const mapStateToProps = state => {
    return {
        stateprop1: state.example.stateprop1,
        stateprop2: state.example2.stateprop2,
        input_text: state.example2.user_input,

        selectedGenre: state.example.selectedGenre

    };
};

const mapDispatchToProps = dispatch => {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),

        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(failure()),

        user_input: whatever => dispatch(ACTIONS.user_input(whatever)),

        selectGenre: (genre) => dispatch(ACTIONS.selectGenre(genre))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mockup);
