import {
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_FAILURE
} from '../actions/actionTypes';

const initialState = {
    coinCurrentPrice:{},
    accountUser:{
        account:{
            BTC:0,
            ETH:0,
            ETC:0,
            BCH:0,
            LTC:0
        }
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
                    coinCurrentPrice:payload.coinCurrentPrice
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