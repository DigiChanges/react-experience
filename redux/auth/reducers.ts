import {
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGOUT_USER,
	GET_PERMISSIONS_SUCCESS,
	SET_DATA_AFTER_RELOADING_SUCCESS,
	CHANGE_FORGOT_PASSWORD,
	CHANGE_FORGOT_PASSWORD_SUCCESS
} from './constants';
import {ReduxAction} from "../../interfaces/default";

const INIT_STATE = {
	user: null,
	permissionsList: [],
	userPermissions: []
};

export interface State {
	user: any | null,
	permissionsList: string[],
	userPermissions: string[]
}

const Auth = (state: State = INIT_STATE, action: ReduxAction) =>
{
	switch (action.type)
	{
		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, userPermissions: action.payload.permissions };

		case LOGIN_USER_FAILED:
			return { ...state, error: action.payload };
		
		case SET_DATA_AFTER_RELOADING_SUCCESS:
			return { ...state, user: action.payload.user, permissionsList: action.payload.permissionsList, userPermissions: action.payload.user.permissions }

		case GET_PERMISSIONS_SUCCESS:
			return { ...state, permissionsList: action.payload }

		case LOGOUT_USER:
			return { ...state, user: null };

		case CHANGE_FORGOT_PASSWORD:
		  return { ...state, loading: true };

		case CHANGE_FORGOT_PASSWORD_SUCCESS:
		  return { ...state, changePasswordResetStatus: action.payload };

		default:
			return { ...state };
	}
};

export default Auth;
