import * as ACTION_TYPES from "./action_types";



export const selectGenre = (payload) => {
    return {
        type: ACTION_TYPES.SELECT_GENRE,
        payload
    };
};


// ACTION CREATOR FUNCTIONS
export const success = () => {
    return {
        type: ACTION_TYPES.SUCCESS
    };
};

export const failure = () => {
    return {
        type: ACTION_TYPES.FAILURE
    };
};


export const user_input = text => {
    return {
        type: ACTION_TYPES.USER_INPUT,
        text
    };
};

export const user_input2 = text => {
    return {
        type: ACTION_TYPES.USER_INPUT2,
        text
    };
};
