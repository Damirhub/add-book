import * as ACTION_TYPES from "../actions/action_types"

const initialState = {
    stateprop2: "state2",
    user_input: ""
}

const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.USER_INPUT:
            console.log("ACTION: ", action)
            return {
                ...state,
                user_input: action.text
            }
        default:
            return state
    }
}

export default reducer2
