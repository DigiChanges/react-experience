import { combineReducers, Store } from 'redux';
import Auth, {State as AuthState} from './auth/reducers';
import General, {State as GeneralState} from './general/reducers';
import Users, {State as UsersState} from './users/reducers';
import Roles, {State as RolesState} from './roles/reducers';
import Menu, {State as MenuState} from './menu/reducers';
import {Task} from "redux-saga";
import { HYDRATE } from 'next-redux-wrapper';

const reducerHydrate = (state = { asd: null }, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

const appReducer = combineReducers({
  // reducerHydrate,
  Auth,
  General,
  Users,
  Roles,
  Menu
});

export interface appState extends Store, AuthState, GeneralState, UsersState, RolesState, MenuState
{
  sagaTask?: Task;
}

export default appReducer;
