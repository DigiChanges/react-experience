import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGOUT_USER,
	GET_PERMISSIONS,
	GET_PERMISSIONS_SUCCESS,
	REGISTER_USER,
	SET_DATA_AFTER_RELOADING,
	SET_DATA_AFTER_RELOADING_SUCCESS,
	FORGET_PASSWORD, CHANGE_FORGOT_PASSWORD,
	CHANGE_FORGOT_PASSWORD_SUCCESS
} from './constants';
import {ReduxAction} from "../../interfaces/default";
import {IChangeForgotPasswordPayload, ILoginPayload} from "../../interfaces/auth";

export const loginUser = (payload: ILoginPayload): ReduxAction => ({
	type: LOGIN_USER,
	payload,
});

export const loginUserSuccess = (user: any): ReduxAction => ({
	type: LOGIN_USER_SUCCESS,
	payload: user,
});

export const getPermissions = (): ReduxAction => ({
	type: GET_PERMISSIONS,
	payload: null
})

export const getPermissionsSuccess = (permissions: []): ReduxAction => ({
	type: GET_PERMISSIONS_SUCCESS,
	payload: permissions
})

export const registerUser = (fullName: string, email: string, password: string): ReduxAction => ({
	type: REGISTER_USER,
	payload: {fullName, email, password},
});

export const logoutUser = (history: any): ReduxAction => ({
	type: LOGOUT_USER,
	payload: { history },
});

export const setDataAfterReloading = (user: any): ReduxAction => ({
	type: SET_DATA_AFTER_RELOADING,
	payload: { user }
})

export const setDataAfterReloadingSuccess = (user: any): ReduxAction => ({
	type: SET_DATA_AFTER_RELOADING_SUCCESS,
	payload: { user }
})

export const forgetPassword = (email: string): ReduxAction => ({
    type: FORGET_PASSWORD,
    payload: { email },
});

export const changeForgotPassword = (payload: IChangeForgotPasswordPayload): ReduxAction => ({
    type: CHANGE_FORGOT_PASSWORD,
    payload,
});

export const changeForgotPasswordSuccess = (changePasswordResetStatus: string): ReduxAction => ({
    type: CHANGE_FORGOT_PASSWORD_SUCCESS,
    payload: changePasswordResetStatus,
});
