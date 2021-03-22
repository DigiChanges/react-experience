import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import General from './general/reducers';
import Paths from './paths/reducers';
import Users from './users/reducers';
import Roles from './roles/reducers';
import Menu from './menu/reducers';

const appReducer = combineReducers({
  Auth,
  General,
  Paths,
  Users,
  Roles,
  Menu
});

export default appReducer;
