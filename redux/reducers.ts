import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import Loading from './loading/reducers';

const appReducer = combineReducers({
    Auth,
    Loading
});

export default appReducer;
