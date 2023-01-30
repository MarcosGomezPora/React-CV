const INITAL_STATE = {
    about: "",
};

export const aboutReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ABOUT': {
            return { ...state, about: action.payload }
        }
        default:
            return state;
    }
};