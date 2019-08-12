import * as ACTION_TYPES from "../actions/action_types";

import initial from '../../config.json'

console.log("XXX", initial)

const initialState = {
    stateprop1: false,
    user_input: ""
};

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                stateprop1: true
            };
        case ACTION_TYPES.FAILURE:
            return {
                ...state,
                stateprop1: false
            };
        case ACTION_TYPES.USER_INPUT:
          console.log("ACTION: ", action);
          return {
            ...state,
            user_input: action.text
          };
        default:
            return state;
    }
};

export default reducer1;
