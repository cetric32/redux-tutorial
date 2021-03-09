import { useState } from "react";
import "./App.css";
import update_person from "./store/actions/personActions";
import { connect } from "react-redux";
import { UPDATE_GAME } from "./store/actions/gameActions";
import userActions, { fetch_users } from "./store/actions/usersActions";

function App(props) {
  console.log(props);
  const [name, setName] = useState("");
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Redux Tutorial</h1>
        </header>
      </div>
      <div>person name: {props.person.name}</div>
      <div>game : {props.game.name}</div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.updatePerson(name);
          }}
        >
          <label htmlFor="person_name">Person Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value="Change Name" />
        </form>
      </div>

      <div>
        Users: <button onClick={props.fetchUsers}>Fetch users</button>
      </div>
      <div>
        {props.users.map((user) => {
          return (
            <p key={user.id}>
              {user.first_name + "->" + user.email} <br />
              <img src={user.avatar} alt="" />
            </p>
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    person: state.person,
    game: state.game,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePerson: (value) => {
      dispatch({ type: update_person.UPDATE_NAME, payload: value });
    },
    updateGame: (value) => {
      dispatch({ type: UPDATE_GAME, payload: value });
    },
    fetchUsers: () => {
      fetch_users(dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
