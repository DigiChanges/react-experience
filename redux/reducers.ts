import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import General from './general/reducers';

const appReducer = combineReducers({
    Auth,
    General
});

export default appReducer;
