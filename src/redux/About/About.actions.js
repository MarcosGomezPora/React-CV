import store from "../store";
const { dispatch } = store;

export const setAbout = (data) => {
    dispatch({
        type: 'SET_ABOUT',
        payload: data,
    })
}