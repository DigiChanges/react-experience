import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import General from './general/reducers';
import Paths from './paths/reducers';
import Users from './users/reducers';
import Roles from './roles/reducers';

const appReducer = combineReducers({
  Auth,
  General,
  Paths,
  Users,
  Roles
});

export default appReducer;
