import {
  REQUEST_LOGIN,
  REQUEST_REGISTER,
  REQUEST_ACCOUNT,
  REQUEST_COIN_CURRENT_PRICE,
  REQUEST_BTC_HISTORIC,
  REQUEST_TRANSACTION
} from './actionTypes'

export const requestLogin = payload => ({
  type: REQUEST_LOGIN,
  payload,
});

export const requestRegister = payload => ({
  type: REQUEST_REGISTER,
  payload,
});

export const requestAccountData = payload => ({
  type: REQUEST_ACCOUNT,
  payload,
});

export const requestCurrentCoinPrice = payload => ({
  type: REQUEST_COIN_CURRENT_PRICE,
  payload,
});

export const requestBTCHistoricData = payload => ({
  type: REQUEST_BTC_HISTORIC,
  payload,
});

export const requestTransactionData = payload => ({
  type: REQUEST_TRANSACTION,
  payload,
});