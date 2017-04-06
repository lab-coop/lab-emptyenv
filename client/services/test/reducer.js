export const getStore = (actions) => {
  return (state = {}, action) => {
    switch(action.type) {
      case(actions.TEST_RECEIVE):
        return {...state, testProperty: action.testProperty};
      default:
        return state;
    }
  }
}
