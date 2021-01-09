// @flow
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { signin } from '../../services/authService'
import { LOGIN_USER, LOGOUT_USER, FORGET_PASSWORD, CHANGE_FORGOT_PASSWORD } from './constants';
import { setSession, getSession, removeSession } from '../../helpers/authSession'
import { notificationTypes, notification } from '../../entities/notification';
import { 
  startGeneralLoading, 
  stopGeneralLoading, 
  showGeneralNotification 
} from '../general/actions'
import {
  loginUserSuccess,
  loginUserFailed,
  forgetPasswordSuccess,
  forgetPasswordFailed,
  changeForgotPasswordFailed,
  changeForgotPasswordSuccess,
  changeForgotPasswordFieldsFailed
} from './actions';
import Router from 'next/router'


function* login({ payload: { email, password } }) {
  yield put( startGeneralLoading() )
  try {
    let res = yield call( signin, email, password )      
    const { data } = res
    if (data.expires && data.user && data.token) {
      setSession( data )
      yield put( loginUserSuccess(data.user) )
      Router.replace('/')
    } else {
      yield put( 
        showGeneralNotification(
          notification(
            notificationTypes.ERROR, 
            'Internal Server Error')
        ) 
      )
    }
  } catch (e) {
    removeSession()
    yield put( 
      showGeneralNotification(
        notification(
          notificationTypes.ERROR,
          e.message)
      ) 
    )
  } finally {
    yield put( stopGeneralLoading() )
  }
}










//TODO - PENDING REVIEW

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
