import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { requestAccountData,requestCurrentCoinPrice,requestBTCHistoricData } from '../actions/actionCreator';

const mapStateToProps = state => {
    return ({
        login: state.login,
        account: state.account,
        currentCoinPrice: state.currentCoinPrice,
        BTCHistoric:state.BTCHistoric,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAccountData,
            requestCurrentCoinPrice,
            requestBTCHistoricData,

        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);