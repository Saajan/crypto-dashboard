import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import {
    loginReducer
} from './loginReducer';
import {
    registerReducer
} from './registerReducer';
import {
    currentCoinPriceReducer
} from './currentCoinPriceReducer';
import {
    accountReducer
} from './accountReducer';
import {
    BTCHistoricReducer
} from './BTCHistoricReducer';
import {
    transactionReducer
} from './transactionReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    router: routerReducer,
    account: accountReducer,
    currentCoinPrice: currentCoinPriceReducer,
    BTCHistoric:BTCHistoricReducer,
    transaction:transactionReducer
});


export default rootReducer;