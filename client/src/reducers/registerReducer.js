import {
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_FAILURE
} from '../actions/actionTypes';


const initialState = {
    error: null
};

export const registerReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_REGISTER_SUCCESS:
            {
                return { ...state,
                    success: payload
                };
            }
        case REQUEST_REGISTER_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};