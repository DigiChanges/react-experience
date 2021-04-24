// @flow
import Router from 'next/router';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {signin, getAllPermissions, getForgotPassword, setChangeForgotPassword} from '../../services/authService'
import {notificationTypes, notification} from '../../entities';

import {LOGIN_USER, LOGOUT_USER, GET_PERMISSIONS, SET_DATA_AFTER_RELOADING, FORGET_PASSWORD, CHANGE_FORGOT_PASSWORD} from './constants';
import {startGeneralLoading, stopGeneralLoading, showGeneralNotification} from '../general/actions';
import {getPermissionsSuccess, loginUserSuccess, setDataAfterReloadingSuccess} from './actions';
import {removeSession, setSession} from "../../helpers/AuthSession";
import {defaultRoute} from "../../config/dashRoutes";

function* login({payload})
{
	yield put(startGeneralLoading())

	try
	{
		const res = yield call(signin, payload)
		const {data} = res

		if (data.expires && data.user && data.token)
		{
			setSession(data)
			yield put(loginUserSuccess(data.user))
			Router.replace(defaultRoute)
		}
		else
		{
			yield put(
				showGeneralNotification(
					notification(
						notificationTypes.ERROR,
						'Internal Server Error')
				)
			)
		}
	} catch (e)
	{
		removeSession()
		yield put(
			showGeneralNotification(
				notification(
					notificationTypes.ERROR,
					e.message)
			)
		)
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({payload: {history}})
{
	try
	{
		setSession(null);
		yield call(() =>
		{
			if (history)
			{
				history.push('/login');
			}
		});
	} catch (error)
	{
		console.log(error);
	}
}

function* getPermissionsList()
{
	try
	{
		const res = yield call(getAllPermissions)
		const {data} = res
		if (data)
		{
			yield put(getPermissionsSuccess(data));
		}
		else
		{
			return yield put(
				showGeneralNotification(
					notification(
						notificationTypes.ERROR,
						'Internal Server Error'
					)
				)
			)
		}
	} catch (e)
	{
		yield put(
			showGeneralNotification(
				notification(
					notificationTypes.ERROR,
					e.message
				)
			)
		)
	}
}

function* setDataAfterReloading({payload: {user}})
{
	if(user)
	{
		yield put(setDataAfterReloadingSuccess(user))
	}
	else
	{
		return yield put(
			showGeneralNotification(
				notification(
					notificationTypes.ERROR,
					'Internal Server Error'
				)
			)
		)
	}
}

/**
 * forget password
 */
function* forgetPassword({ payload: { email } })
{
	try
	{
		yield put(startGeneralLoading());

		const res = yield call(getForgotPassword, email);

		if (res)
		{
			yield put(
				showGeneralNotification(notification( notificationTypes.SUCCESS, res.message))
			)
		}
		else
		{
			yield put(
				showGeneralNotification(notification(notificationTypes.ERROR, 'Internal Server Error'))
			)
		}
	} catch (e)
	{
		yield put(
			showGeneralNotification(
				notification(
					notificationTypes.ERROR,
					e.message)
			)
		)
	}
	finally
	{
		yield put(stopGeneralLoading())
	}
}

/**
* change forget password
*/
function* changeForgotPassword({ payload })
{
	try
	{
		yield put(startGeneralLoading());

		const res = yield call(setChangeForgotPassword, payload);
		if (res)
		{
			yield put(
				showGeneralNotification(notification( notificationTypes.SUCCESS, res.message))
			)
		}
		else
		{
			yield put(
				showGeneralNotification(notification(notificationTypes.ERROR, 'Internal Server Error'))
			)
		}
	} catch (e)
	{
		yield put(
			showGeneralNotification(
				notification(
					notificationTypes.ERROR,
					e.message)
			)
		)
	}
	finally
	{
		yield put(stopGeneralLoading())
	}
}

export function* watchLoginUser(): any
{
	// @ts-ignore
	yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser(): any
{
	// @ts-ignore
	yield takeEvery(LOGOUT_USER, logout);
}

export function* watchGetPermissions(): any
{
	// @ts-ignore
	yield takeEvery(GET_PERMISSIONS, getPermissionsList);
}

export function* watchSetDataAfterReloading(): any
{
	// @ts-ignore
	yield takeEvery(SET_DATA_AFTER_RELOADING, setDataAfterReloading);
}

export function* watchForgetPassword(): any {
  // @ts-ignore
  yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

export function* watchChangeForgotPassword(): any {
  // @ts-ignore
  yield takeEvery(CHANGE_FORGOT_PASSWORD, changeForgotPassword);
}

function* authSaga(): any
{
	yield all([
		fork(watchLoginUser),
		fork(watchLogoutUser),
		fork(watchGetPermissions),
		fork(watchSetDataAfterReloading),
		fork(watchForgetPassword),
		fork(watchChangeForgotPassword)
	])
}

export default authSaga;
