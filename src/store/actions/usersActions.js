const userActions = {
  FETCH_USERS: "FETCH_USERS",
};

export const fetch_users = (dispatch) => {
  fetch("https://reqres.in/api/users")
    .then((resp) => resp.json())
    .then((json) => {
      dispatch({ type: userActions.FETCH_USERS, payload: json.data });
    });
};

export default userActions;
