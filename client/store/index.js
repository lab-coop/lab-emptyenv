import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

function Reducers(container) {

  const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    test: container.get('test').store
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
