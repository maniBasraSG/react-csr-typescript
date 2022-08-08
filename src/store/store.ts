import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const store = createStore(rootReducer, undefined, composeWithDevTools());

export default store;
