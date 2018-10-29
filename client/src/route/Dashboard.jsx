import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { requestAccountData,requestCurrentCoinPrice,requestBTCHistoricData ,requestTransactionData} from '../actions/actionCreator';

const mapStateToProps = state => {
    return ({
        login: state.login,
        account: state.account,
        currentCoinPrice: state.currentCoinPrice,
        BTCHistoric:state.BTCHistoric,
        transaction :state.transaction
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAccountData,
            requestCurrentCoinPrice,
            requestBTCHistoricData,
            requestTransactionData,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);