const init = {};

const apiDataReducer = (state = init, action) => {
  if (action.type === "testingStore") {
    console.log(action);
    return action.payload;
  } else {
    return false;
  }
};
export default apiDataReducer;
