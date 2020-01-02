import { connect } from 'react-redux';
import { forgotPassword } from '../../actions/session_actions';
import { ForgotPasswordForm } from './ForgotPasswordForm';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        forgotPasswordConfirmation: state.ui.confirmation.forgotPasswordConfirmation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        forgotPassword: (email) => dispatch(forgotPassword(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);