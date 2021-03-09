import { UPDATE_GAME } from "../actions/gameActions";

const gameReducer = (state = {}, actions) => {
  switch (actions.type) {
    case UPDATE_GAME:
      return {
        name: actions.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
