import { addError, removeError } from './error';
import { SET_CURRENT_USER } from '../actionTypes';
import API from '../../services/api';

export const setCurrentuser = user => ({
    type: SET_CURRENT_USER,
    user
});


export const setToken = token => {
    API.setToken(token);
};

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        API.setToken(null);
        dispatch(setCurrentuser({}));
        dispatch(removeError());
    }
}

export const authUser = (path, data) => {
    return async dispatch => {
        try {

            const { token, ...user } = await API.call('post', `auth/${path}`, data);
            localStorage.setItem('jwtToken', token);
            API.setToken(token);

            dispatch(setCurrentuser(user));
            dispatch(removeError());

        } catch (err) {
            const error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}