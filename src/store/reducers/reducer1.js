import * as ACTION_TYPES from "../actions/action_types"

import initial from '../../config.json'

console.log("%cCONFIG INITIAL", "color:lawngreen", initial)

const initialState = {
    stateprop1: false,
    user_input: "",
    selectedGenre: '',
    selectedSubGenre: '',
    pageCounter: 1,

    ACT: "color: lawngreen"
}

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                stateprop1: true
            }
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                stateprop1: false
            }

        case ACTION_TYPES.SELECT_GENRE:
            console.log("%cACTION: SELECTED GENRE: ", state.ACT, action)
            return {
                ...state,
                selectedGenre: action.payload
            }
        case ACTION_TYPES.SELECT_SUBGENRE:
            console.log("%cACTION: SELECTED SUBGENRE!!!!!!!!!!: ", state.ACT, action)
            return {
                ...state,
                selectedSubgenre: action.payload
            }

        case ACTION_TYPES.WIZARD_STEPS:
            console.log("%cACTION: WIZARD_STEPS!!!!!!!!!!: ", state.ACT, action)
            return {
                ...state,
                wizardSteps: action.payload
            }

            case ACTION_TYPES.PAGE_COUNTER:
                console.log("%cACTION: PAGE_COUNT!!!!!!!!!!: ", state.ACT, action)
                return {
                    ...state,
                    pageCounter: action.payload
                }
    

        default:
            return state
    }
}

export default reducer1
