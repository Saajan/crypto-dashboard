import {
    REQUEST_TRANSACTION_SUCCESS,
    REQUEST_TRANSACTION_FAILURE
} from '../actions/actionTypes';

const initialState = {
    transaction: [],
    error: null
};

export const transactionReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_TRANSACTION_SUCCESS:
            {
                return { ...state,
                    transaction: payload.transaction,
                };
            }
        case REQUEST_TRANSACTION_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};
