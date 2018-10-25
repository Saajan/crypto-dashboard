import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import { requestLogin } from '../actions/actionCreator';

const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestLogin,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);