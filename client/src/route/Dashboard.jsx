import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { requestAccountData,requestCurrentCoinPrice } from '../actions/actionCreator';

const mapStateToProps = state => {
    return ({
        login: state.login,
        account: state.account,
        currentCoinPrice: state.currentCoinPrice,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAccountData,
            requestCurrentCoinPrice,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);