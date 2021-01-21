import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  GET_PERMISSIONS_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILED,
  CHANGE_FORGOT_PASSWORD,
  CHANGE_FORGOT_PASSWORD_SUCCESS,
  CHANGE_FORGOT_PASSWORD_FAILED,
  CHANGE_FORGOT_PASSWORD_FIELDS_FAILED
} from './constants';
import {AuthAction} from "./actions";

const INIT_STATE = {
    user: null,
    loading: false, //TODO REMOVE
    error: null, //TODO REMOVE
    permissions: null
};

type State = { 
  user: {} | null, 
  loading: boolean, 
  error: null, 
  permissions: [] | null 
}

const Auth = (state: State = INIT_STATE, action: AuthAction) =>
{
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null};
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false };

    case GET_PERMISSIONS_SUCCESS:
      return { ...state, permissions: action.payload }

    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case REGISTER_USER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case LOGOUT_USER:
      return { ...state, user: null, loading: false, };
    case FORGET_PASSWORD:
      return { ...state, loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return { ...state, passwordResetStatus: action.payload, loading: false, error: null };
    case FORGET_PASSWORD_FAILED:
      return { ...state, error: action.payload, loading: false };
    case CHANGE_FORGOT_PASSWORD:
      return { ...state, loading: true, errorFields: null };
    case CHANGE_FORGOT_PASSWORD_SUCCESS:
      return { ...state, changePasswordResetStatus: action.payload, loading: false, error: null, errorFields: null };
    case CHANGE_FORGOT_PASSWORD_FAILED:
      return { ...state, error: action.payload, loading: false, errorFields: null };
    case CHANGE_FORGOT_PASSWORD_FIELDS_FAILED:
      return { ...state, error: null, errorFields: action.payload["errorsField"], loading: false };
    default:
      return { ...state };
  }
};

export default Auth;
