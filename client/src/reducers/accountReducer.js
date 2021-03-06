import {
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_FAILURE
} from '../actions/actionTypes';

const initialState = {
    account: [],
    error: null
};

export const accountReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_ACCOUNT_SUCCESS:
            {
                return { ...state,
                    account: payload.account,
                };
            }
        case REQUEST_ACCOUNT_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};
