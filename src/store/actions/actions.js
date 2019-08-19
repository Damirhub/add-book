import * as ACTION_TYPES from "./action_types"


export const selectGenre = (payload) => {
    return {
        type: ACTION_TYPES.SELECT_GENRE,
        payload
    }
}

export const selectSubgenre = (payload) => {
    return {
        type: ACTION_TYPES.SELECT_SUBGENRE,
        payload
    }
}

export const pageCounter = (payload) => {
    return {
        type: ACTION_TYPES.PAGE_COUNTER,
        payload
    }
}

export const wizardSteps = (payload) => {
    return {
        type: ACTION_TYPES.WIZARD_STEPS,
        payload
    }
}




// ACTION CREATOR FUNCTIONS
export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    }
}

export const user_input = text => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        text
    }
}

export const user_input2 = text => {
    return {
        type: ACTION_TYPES.USER_INPUT2,
        text
    }
}
