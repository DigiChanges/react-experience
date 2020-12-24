import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import General from './general/reducers';
import Paths from './paths/reducers';

const appReducer = combineReducers({
    Auth,
    General,
    Paths
});

export default appReducer;
