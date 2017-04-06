import {actions} from './actions';
import {getStore} from './reducer';

function Test() {
  const myAsyncFunction = () => async (dispatch) => {
    const result = await 'my test';
    dispatch(actions.receiveRequest(result));
  }

  return Object.freeze({
    ...actions,
    store: getStore(actions),
    myAsyncFunction
  });

}

export default Test;
