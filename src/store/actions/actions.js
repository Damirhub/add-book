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

export const addNewSub = (payload) => {
    return {
        type: ACTION_TYPES.ADD_NEW_SUB,
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