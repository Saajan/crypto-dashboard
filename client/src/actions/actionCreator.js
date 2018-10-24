import { REQUEST_LOGIN ,REQUEST_REGISTER ,REQUEST_ACCOUNT} from './actionTypes'

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

