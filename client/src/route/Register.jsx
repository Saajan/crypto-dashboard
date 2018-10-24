import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RegisterForm from '../components/RegisterForm';
import { requestRegister } from '../actions/actionCreator';

const mapStateToProps = state => ({
    register : state.register
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestRegister,
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);