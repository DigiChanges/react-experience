import { combineReducers } from 'redux';
import Auth from './auth/reducers';

const appReducer = combineReducers({
    Auth
});

export default appReducer;
