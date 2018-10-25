import {
    REQUEST_COIN_CURRENT_PRICE_SUCCESS,
    REQUEST_COIN_CURRENT_PRICE_FAILURE
} from '../actions/actionTypes';

const initialState = {
    currentCoinPrice: [],
    error: null
};

export const currentCoinPriceReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case REQUEST_COIN_CURRENT_PRICE_SUCCESS:
            {
                return { ...state,
                    currentCoinPrice: payload.currentCoinPrice,
                };
            }
        case REQUEST_COIN_CURRENT_PRICE_FAILURE:
            {
                return { ...state,
                    error: payload
                }
            }
        default:
            return state;
    }
};
