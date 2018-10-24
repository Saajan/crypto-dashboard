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
    accountReducer
} from './accountReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    router: routerReducer,
    account: accountReducer
});


export default rootReducer;