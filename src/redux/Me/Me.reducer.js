const INITAL_STATE = {
    me: {},
};

export const meReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ME': {
            return { ...state, me: action.payload }
        }
        default:
            return state;
    }
};