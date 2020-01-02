import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, {
        [action.currentUser.id]: action.currentUser
      });
      return nextState;
    default:
      return oldState;
  }
};

export default usersReducer;