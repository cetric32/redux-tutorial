import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import schoolReducer from "./reducers/schoolReducer";
import usersReducer from "./reducers/usersReducer";

const allReducers = combineReducers({
  person: personReducer,
  game: gameReducer,
  school: schoolReducer,
  users: usersReducer,
});

const initialState = {
  person: {
    name: "Kevin",
  },
  game: {
    name: "Football",
  },
  school: {
    name: "shitechia",
  },
  users: [],
};

const middleware = [thunk];
const Store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default Store;
