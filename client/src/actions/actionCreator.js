import { REQUEST_LOGIN ,REQUEST_REGISTER ,REQUEST_ACCOUNT ,REQUEST_COIN_CURRENT_PRICE} from './actionTypes'

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


  

