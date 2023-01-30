import store from "../store";
const { dispatch } = store;

export const setMe = (data) => {
    dispatch({
        type: 'SET_ME',
        payload: data,
    })
}