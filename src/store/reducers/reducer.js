import * as ACTION_TYPES from "../actions/action_types"

import initial from '../../config.json'

console.log("%cCONFIG INITIAL", "color:lawngreen", initial)

const initialState = {
    selectedGenre: '',
    selectedSubGenre: '',
    pageCounter: 1,
    addNewSub: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTION_TYPES.SELECT_GENRE:
            return {
                ...state,
                selectedGenre: action.payload
            }
        case ACTION_TYPES.SELECT_SUBGENRE:
            return {
                ...state,
                selectedSubgenre: action.payload
            }
        case ACTION_TYPES.WIZARD_STEPS:
            return {
                ...state,
                wizardSteps: action.payload
            }

        case ACTION_TYPES.PAGE_COUNTER:
            return {
                ...state,
                pageCounter: action.payload
            }
        case ACTION_TYPES.ADD_NEW_SUB:
            return {
                ...state,
                addNewSub: action.payload
            }

        default:
            return state
    }
}

export default reducer
