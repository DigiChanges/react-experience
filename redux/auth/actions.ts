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
	// FORGET_PASSWORD,
	// FORGET_PASSWORD_SUCCESS,
	// FORGET_PASSWORD_FAILED,
	// CHANGE_FORGOT_PASSWORD,
	// CHANGE_FORGOT_PASSWORD_SUCCESS,
	// CHANGE_FORGOT_PASSWORD_FAILED,
	// CHANGE_FORGOT_PASSWORD_FIELDS_FAILED
} from './constants';

export class AuthAction
{
	type: string;
	payload: any | string;
}

export const loginUser = (email: string, password: string): AuthAction => ({
	type: LOGIN_USER,
	payload: {email, password},
});

export const loginUserSuccess = (user: any): AuthAction => ({
	type: LOGIN_USER_SUCCESS,
	payload: user,
});

export const loginUserFailed = (error: string): AuthAction => ({
	type: LOGIN_USER_FAILED,
	payload: error,
});

export const getPermissions = (): AuthAction => ({
	type: GET_PERMISSIONS,
	payload: null
})

export const getPermissionsSuccess = (permissions: []): AuthAction => ({
	type: GET_PERMISSIONS_SUCCESS,
	payload: permissions
})

export const registerUser = (fullName: string, email: string, password: string): AuthAction => ({
	type: REGISTER_USER,
	payload: {fullName, email, password},
});

export const registerUserSuccess = (user: any): AuthAction => ({
	type: REGISTER_USER_SUCCESS,
	payload: user,
});

export const registerUserFailed = (error: string): AuthAction => ({
	type: REGISTER_USER_FAILED,
	payload: error,
});

export const logoutUser = (history: any): AuthAction => ({
	type: LOGOUT_USER,
	payload: {history},
});

// export const forgetPassword = (email: string): AuthAction => ({
//     type: FORGET_PASSWORD,
//     payload: { email },
// });
//
// export const forgetPasswordSuccess = (passwordResetStatus: string): AuthAction => ({
//     type: FORGET_PASSWORD_SUCCESS,
//     payload: passwordResetStatus,
// });

// export const forgetPasswordFailed = (error: string): AuthAction => ({
//     type: FORGET_PASSWORD_FAILED,
//     payload: error,
// });

// export const changeForgotPassword = (confirmationToken: string, password: string, passwordConfirmation: string): AuthAction => ({
//     type: CHANGE_FORGOT_PASSWORD,
//     payload: { confirmationToken, password, passwordConfirmation},
// });
//
// export const changeForgotPasswordSuccess = (changePasswordResetStatus: string): AuthAction => ({
//     type: CHANGE_FORGOT_PASSWORD_SUCCESS,
//     payload: changePasswordResetStatus,
// });
//
// export const changeForgotPasswordFailed = (error: string): AuthAction => ({
//     type: CHANGE_FORGOT_PASSWORD_FAILED,
//     payload: error,
// });
//
// export const changeForgotPasswordFieldsFailed = (errorsField: []): AuthAction => ({
//     type: CHANGE_FORGOT_PASSWORD_FIELDS_FAILED,
//     payload: { errorsField },
// });
