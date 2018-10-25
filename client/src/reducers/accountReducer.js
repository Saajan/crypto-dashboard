import {
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_FAILURE
} from '../actions/actionTypes';

const initialState = {
    coinCurrentPrice: {},
    accountUser: {
        account: {}
    },
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
                    accountUser: payload.accountUser,
                    coinCurrentPrice: payload.coinCurrentPrice
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
