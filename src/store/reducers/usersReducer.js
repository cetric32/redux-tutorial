import userActions from "../actions/usersActions";

const usersReducer = (state = [], actions) => {
  switch (actions.type) {
    case userActions.FETCH_USERS:
      return actions.payload;
    default:
      return state;
  }
};

export default usersReducer;
