import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import { requestAccountData } from '../actions/actionCreator';

const mapStateToProps = state => {

    console.log(state);

    return ({
        login: state.login,
        account: state.account,
    })
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestAccountData,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);