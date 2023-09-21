import { legacy_createStore as createStore } from 'redux';
import todos from '../reducers/todo';

export type rootState = ReturnType<typeof todos>;

export default createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
