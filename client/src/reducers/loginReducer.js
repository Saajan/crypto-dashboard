import {
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE
} from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    error: null
};

export const loginReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_LOGIN_SUCCESS:
            {
                return { ...state,
                    token: payload,
                };
            }
        case REQUEST_LOGIN_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};