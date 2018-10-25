import {
    REQUEST_BTC_HISTORIC_SUCCESS,
    REQUEST_BTC_HISTORIC_FAILURE
} from '../actions/actionTypes';

const initialState = {
    BTCHistoric: [],
    error: null
};

export const BTCHistoricReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_BTC_HISTORIC_SUCCESS:
            {
                return { ...state,
                    BTCHistoric: payload.BTCHistoric,
                };
            }
        case REQUEST_BTC_HISTORIC_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};
