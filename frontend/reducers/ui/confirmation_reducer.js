import {
    SIGNUP_CURRENT_USER,
    RECEIVE_FORGOT_PASSWORD
} from '../../actions/session_actions';

const confirmationReducer = (state = {}, action) => {
    Object.freeze(state);
    // return nothing if we hit default case
    const noConf = {};

    switch (action.type) {
        case SIGNUP_CURRENT_USER:
            return { signupConfirmation: action.confirmationMsg[0] }
        case RECEIVE_FORGOT_PASSWORD:
            return { forgotPasswordConfirmation: action.confirmationMsg[0] }
        default:
            return noConf;
    }
};

export default confirmationReducer;