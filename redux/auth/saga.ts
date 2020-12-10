// @flow
// import { Cookies } from 'react-cookie';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// import { fetchJSON } from '../../helpers/api';
// import { getTenantIdFromToken } from "../../helpers/authUtils";

import { signin } from '../../services/userService'

import { LOGIN_USER, LOGOUT_USER, FORGET_PASSWORD, CHANGE_FORGOT_PASSWORD } from './constants';

import {
    loginUserSuccess,
    loginLoading,
    loginUserFailed,
    forgetPasswordSuccess,
    forgetPasswordFailed,
    changeForgotPasswordFailed,
    changeForgotPasswordSuccess,
    changeForgotPasswordFieldsFailed
} from './actions';



// import {currentApiRoute} from "../../routes/api";

/**
 * Sets the session
 * @param {*} data
 */
// const setSession = (data) => {
//     let cookies = new Cookies();
//
//     if (data) {
//         const { expires, token, user } = data;
//
//         cookies.set('user', JSON.stringify(user), { path: '/' });
//         cookies.set('expires', JSON.stringify(expires), { path: '/' });
//         cookies.set('token', JSON.stringify(token), { path: '/' });
//         cookies.set('tenantId', getTenantIdFromToken(token), { path: '/' });
//         cookies.set('socket', JSON.stringify({status: false}), { path: '/' });
//         cookies.set('firstLogin', JSON.stringify({ firstLogin: true }) , { path: '/' });
//     }
//     else {
//         cookies.remove('user', { path: '/' });
//         cookies.remove('expires', { path: '/' });
//         cookies.remove('token', { path: '/' });
//         cookies.remove('tenantId', { path: '/' });
//         cookies.remove('socket', { path: '/' });
//         cookies.remove('firstLogin', { path: '/' });
//
//     }
// };
/**
 * Login the user
 * @param authParams
 */

function* login({ payload: { email, password } }) {
    // const options = {
    //     body: JSON.stringify({ email, password }),
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    // };

    yield put( loginLoading() )

    try {

      //fake api consume
      //todo: jwt decode get data
      let res = yield call( signin, email, password )
      res.data = {
        name: 'Agustin',
        surname: 'Perez',
        email: 'agustin.perez@gmail.com',
        token: '123456789'
      }
      
      if (res && res.data && res.data.token) {
        yield put( loginUserSuccess(res.data) )
      } else {
        throw new Error(res.message || 'Internal Server Error')
      }



        // const response = yield call(fetchJSON, currentApiRoute.apiEnv + '/auth/login', options);
        // if (response.status === "error")
        // {
        //     yield put(loginUserFailed(response.message));
        //     return;
        // }

        // setSession(response.data);
        // yield put(loginUserSuccess(response.data));
    } catch (error) {
      yield put( loginUserFailed(error.message) )
        // yield put(loginUserFailed(error.message));
        // setSession(null);
    }
}

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({ payload: { history } }) {
    try {
        // setSession(null);
        yield call(() => {
            if (history)
            {
                history.push('/login');
            }
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * forget password
 */
function* forgetPassword({ payload: { email } }) {
    const options = {
        body: JSON.stringify({ email }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        // const response = null;
        // const response = yield call(fetchJSON, currentApiRoute.apiEnv + '/auth/forgotPassword', options);

        // if (response.status === "error")
        // {
        //     yield put(forgetPasswordFailed(response.message));
        //     return;
        // }

        // yield put(forgetPasswordSuccess(response.message));
    } catch (error) {
        // yield put(forgetPasswordFailed(error.message));
    }
}

/**
 * change forget password
 */
function* changeForgotPassword({ payload: { confirmationToken, password, passwordConfirmation } }) {
    const options = {
        body: JSON.stringify({ confirmationToken, password, passwordConfirmation }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        // const response = yield call(fetchJSON, currentApiRoute.apiEnv + '/auth/changeForgotPassword', options);
        //
        // if (response.status === "error")
        // {
        //     yield put(changeForgotPasswordFailed(response.message));
        //     return;
        // }
        //
        // if (response.hasOwnProperty("errors"))
        // {
        //     yield put(changeForgotPasswordFieldsFailed(response.errors));
        //     return;
        // }

        // yield put(changeForgotPasswordSuccess(response.message));
    } catch (error) {
        // yield put(changeForgotPasswordFailed(error.message));
    }
}

export function* watchLoginUser(): any {
    // @ts-ignore
    yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser(): any {
    // @ts-ignore
    yield takeEvery(LOGOUT_USER, logout);
}

export function* watchForgetPassword(): any {
    // @ts-ignore
    yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

export function* watchChangeForgotPassword(): any {
    // @ts-ignore
    yield takeEvery(CHANGE_FORGOT_PASSWORD, changeForgotPassword);
}

function* authSaga(): any {
    yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchForgetPassword), fork(watchChangeForgotPassword)]);
}

export default authSaga;
