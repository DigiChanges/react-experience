import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import {notification, notificationTypes} from '../../entities/notification'
import Router from 'next/router'
import {
	getAllUsers,
	postUser,
	putUser,
	changeUserPassword,
	deleteUser,
	assignUserRole
} from '../../services/usersService'

import {
	GET_USERS,
	CREATE_USER,
	UPDATE_USER,
	CHANGE_PASSWORD,
	REMOVE_USER
} from './constants'
import {
	startGeneralLoading,
	stopGeneralLoading,
	showGeneralNotification
} from '../general/actions'
import {
	getUserSuccess,
	createUserSuccess,
	updateUserSuccess,
	removeUserSuccess
} from './actions'

function* getUsersList()
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(getAllUsers)
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}
		yield put(getUserSuccess(data))
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

/**
 * Create new user
 * Assign Role
 */
function* createNewUser(
	{
		payload: {
			firstName,
			lastName,
			email,
			password,
			passwordConfirmation,
			permissions,
			roles
		}
	})
{
	yield put(startGeneralLoading())
	try
	{
		const newUser = {firstName, lastName, email, password, passwordConfirmation, permissions}
		//create user
		const res = yield call(postUser, newUser)
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}

		/**
		 * TODO:
		 * CHECK SECOND API CONSUME
		 * WAITING NATHAN SERVER CHANGES
		 */

		//assign roles
		if (roles && roles.length > 0)
		{
			const {id} = data
			const rolesRes = yield call(assignUserRole, id, {rolesId: roles})
			if (!rolesRes)
			{
				return yield put(showErrorNotification('Internal Server Error'))
			}
		}
		yield put(showSuccessNotification('User Created!'))
		yield put(createUserSuccess(data))
		Router.push('/users')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

function* updateUser({
						 payload: {
							 id,
							 firstName,
							 lastName,
							 email,
							 permissions,
							 roles,
							 enable
						 }
					 })
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(putUser, id, {firstName, lastName, email, permissions, roles, enable})
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}
		//assign roles
		if (roles && roles.length > 0)
		{
			const {id} = data
			const rolesRes = yield call(assignUserRole, id, {rolesId: roles})
			if (!rolesRes)
			{
				return yield put(showErrorNotification('Internal Server Error'))
			}
		}
		yield put(showSuccessNotification('User Updated!'))
		yield put(updateUserSuccess(data))
		Router.push('/users')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

function* changePassword({
							 payload: {
								 id,
								 password,
								 passwordConfirmation
							 }
						 })
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(changeUserPassword, id, {
				newPassword: password,
				newPasswordConfirmation: passwordConfirmation
			}
		)
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}
		yield put(showSuccessNotification('Password Changed!'))
		Router.push('/users')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

function* removeUser({payload: id})
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(deleteUser, id)
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}
		yield put(showSuccessNotification('User Removed!'))
		yield put(removeUserSuccess(data))
		Router.push('/users')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

const showSuccessNotification = (msg: string) => (
	showGeneralNotification(
		notification(
			notificationTypes.SUCCESS,
			msg
		)
	)
)

const showErrorNotification = (msg: string) => (
	showGeneralNotification(
		notification(
			notificationTypes.ERROR,
			msg
		)
	)
)

export function* watchGetUsersList(): any
{
	// @ts-ignore
	yield takeEvery(GET_USERS, getUsersList);
}

export function* watchCreateUser(): any
{
	// @ts-ignore
	yield takeEvery(CREATE_USER, createNewUser);
}

export function* watchUpdateUser(): any
{
	// @ts-ignore
	yield takeEvery(UPDATE_USER, updateUser);
}

export function* watchChangeUserPassword(): any
{
	// @ts-ignore
	yield takeEvery(CHANGE_PASSWORD, changePassword)
}

export function* watchRemoveUser(): any
{
	// @ts-ignore
	yield takeEvery(REMOVE_USER, removeUser)
}

function* usersSaga(): any
{
	yield all([
		fork(watchGetUsersList),
		fork(watchCreateUser),
		fork(watchUpdateUser),
		fork(watchChangeUserPassword),
		fork(watchRemoveUser)
	])
}

export default usersSaga
