import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILURE,
    REQUEST_REGISTER,
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_FAILURE,
    REQUEST_ACCOUNT,
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_FAILURE,
    REQUEST_COIN_CURRENT_PRICE,
    REQUEST_COIN_CURRENT_PRICE_SUCCESS,
    REQUEST_COIN_CURRENT_PRICE_FAILURE,
} from '../actions/actionTypes';
import {
    login,
    register,
    account,
    currentCoinPrice
} from '../api';


function* loginSaga({
    payload: {
        fields,
        callback
    }
}) {
    try {
        const {
            token,
            username,
            success,
            msg
        } = yield call(login, fields);
        if (success) {
            yield put({
                type: REQUEST_LOGIN_SUCCESS,
                payload: token,
            });
            localStorage.setItem('user', username);
            localStorage.setItem('token', token);
            callback();
        } else {
            yield put({
                type: REQUEST_LOGIN_FAILURE,
                payload: msg
            });
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = 'Something went wrong';
        }
        yield put({
            type: REQUEST_LOGIN_FAILURE,
            payload: message
        });
        localStorage.removeItem('token');
    }
}

function* registerSaga({
    payload: {
        fields,
        callback
    }
}) {
    //console.log(fields, callback);
    try {
        const {
            success,
            msg
        } = yield call(register, fields);
        console.log(success, msg);
        if (success) {
            yield put({
                type: REQUEST_REGISTER_SUCCESS,
                payload: msg
            });
            callback();
        } else {
            yield put({
                type: REQUEST_REGISTER_FAILURE,
                payload: msg
            });
        }
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid inputs';
                break;
            default:
                message = 'Something went wrong';
        }
        yield put({
            type: REQUEST_LOGIN_FAILURE,
            payload: message
        });
    }
}

function* getAccountSaga({
    payload: {
        fields
    }
}) {

    const accountUser = yield call(account, fields);

    try {
        yield put({
            type: REQUEST_ACCOUNT_SUCCESS,
            payload: accountUser
        })
    } catch (error) {
        yield put({
            type: REQUEST_ACCOUNT_FAILURE,
            error
        })
    }
}

function* getCurrentCoinPriceSaga() {

    const currentCoinPriceResponse = yield call(currentCoinPrice);

    console.log("coindata",currentCoinPriceResponse);

    try {
        yield put({
            type: REQUEST_COIN_CURRENT_PRICE_SUCCESS,
            payload: currentCoinPriceResponse
        })
    } catch (error) {
        yield put({
            type: REQUEST_COIN_CURRENT_PRICE_FAILURE,
            error
        })
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_LOGIN, loginSaga);
    yield takeLatest(REQUEST_REGISTER, registerSaga);
    yield takeLatest(REQUEST_ACCOUNT, getAccountSaga);
    yield takeLatest(REQUEST_COIN_CURRENT_PRICE, getCurrentCoinPriceSaga);
}