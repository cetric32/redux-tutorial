const personReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "UPDATE_NAME":
      return {
        name: actions.payload,
      };

    default:
      return {
        name: "cetric",
      };
  }
};

export default personReducer;
