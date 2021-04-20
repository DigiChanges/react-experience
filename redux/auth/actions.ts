import {
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGOUT_USER,
	GET_PERMISSIONS,
	GET_PERMISSIONS_SUCCESS,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILED,
	SET_DATA_AFTER_RELOADING,
	SET_DATA_AFTER_RELOADING_SUCCESS,
	FORGET_PASSWORD,
	// FORGET_PASSWORD_FAILED,
	// CHANGE_FORGOT_PASSWORD,
	// CHANGE_FORGOT_PASSWORD_SUCCESS,
	// CHANGE_FORGOT_PASSWORD_FAILED,
	// CHANGE_FORGOT_PASSWORD_FIELDS_FAILED
} from './constants';
import {ReduxActions} from "../../interfaces/default";

export const loginUser = (email: string, password: string): ReduxActions => ({
	type: LOGIN_USER,
	payload: {email, password},
});

export const loginUserSuccess = (user: any): ReduxActions => ({
	type: LOGIN_USER_SUCCESS,
	payload: user,
});

export const loginUserFailed = (error: string): ReduxActions => ({
	type: LOGIN_USER_FAILED,
	payload: error,
});

export const getPermissions = (): ReduxActions => ({
	type: GET_PERMISSIONS,
	payload: null
})

export const getPermissionsSuccess = (permissions: []): ReduxActions => ({
	type: GET_PERMISSIONS_SUCCESS,
	payload: permissions
})

export const registerUser = (fullName: string, email: string, password: string): ReduxActions => ({
	type: REGISTER_USER,
	payload: {fullName, email, password},
});

export const registerUserSuccess = (user: any): ReduxActions => ({
	type: REGISTER_USER_SUCCESS,
	payload: user,
});

export const registerUserFailed = (error: string): ReduxActions => ({
	type: REGISTER_USER_FAILED,
	payload: error,
});

export const logoutUser = (history: any): ReduxActions => ({
	type: LOGOUT_USER,
	payload: { history },
});

export const setDataAfterReloading = (user: any): ReduxActions => ({
	type: SET_DATA_AFTER_RELOADING,
	payload: { user }
})

export const setDataAfterReloadingSuccess = (user: any): ReduxActions => ({
	type: SET_DATA_AFTER_RELOADING_SUCCESS,
	payload: { user }
})

export const forgetPassword = (email: string): ReduxActions => ({
    type: FORGET_PASSWORD,
    payload: { email },
});

// export const changeForgotPassword = (confirmationToken: string, password: string, passwordConfirmation: string): ReduxActions => ({
//     type: CHANGE_FORGOT_PASSWORD,
//     payload: { confirmationToken, password, passwordConfirmation},
// });
//
// export const changeForgotPasswordSuccess = (changePasswordResetStatus: string): ReduxActions => ({
//     type: CHANGE_FORGOT_PASSWORD_SUCCESS,
//     payload: changePasswordResetStatus,
// });
//
// export const changeForgotPasswordFieldsFailed = (errorsField: []): ReduxActions => ({
//     type: CHANGE_FORGOT_PASSWORD_FIELDS_FAILED,
//     payload: { errorsField },
// });
