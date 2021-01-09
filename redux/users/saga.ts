import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllUsers, createUser } from '../../services/usersService'

import { GET_USERS, GET_USERS_SUCCESS, CREATE_USER } from './constants';
import { notification, notificationTypes } from '../../entities/notification';
import { 
  startGeneralLoading, 
  stopGeneralLoading, 
  showGeneralNotification 
} from '../general/actions'
import { 
  getUsers, 
  getUserSuccess,
  createUserSuccess
} from './actions'
import Router from 'next/router';

function* getUsersList() {
  yield put( startGeneralLoading() )
  try {
    
    let res = yield call( getAllUsers )
    const { data } = res
    if (!data) {
      return yield put( 
        showGeneralNotification(
          notification(
            notificationTypes.ERROR, 
            'Internal Server Error'
          )
        )
      )
    }

    yield put( getUserSuccess(data) )

  } catch (e) {
    yield put(
      showGeneralNotification(
        notification(
          notificationTypes.ERROR, 
          e.message
        )
      )
    )
  } finally {
    yield put( stopGeneralLoading() )
  }
}

function* createNewUser(
  {payload: {
    firstName, 
    lastName,
    email,
    password,
    passwordConfirmation,
    permissions,
    roles
  }}) {
  yield put( startGeneralLoading() )
  try {
    const newUser = { firstName, lastName, email, password, passwordConfirmation, permissions, roles }
    console.log('createNewUser', newUser)
    let res = yield call( createUser, newUser )
    const { data } = res
    if (!data) {
      return yield put( 
        showGeneralNotification(
          notification(
            notificationTypes.ERROR, 
            'Internal Server Error'
          )
        )
      )
    }

    yield put( createUserSuccess(data) )
    Router.push('/users')

  } catch (e) {
    yield put(
      showGeneralNotification(
        notification(
          notificationTypes.ERROR, 
          e.message
        )
      )
    )
  } finally {
    yield put( stopGeneralLoading() )
  }
}






export function* watchGetUsersList(): any {
  // @ts-ignore
  yield takeEvery(GET_USERS, getUsersList);
}

export function* watchCreateUser(): any {
  // @ts-ignore
  yield takeEvery(CREATE_USER, createNewUser);
}

function* usersSaga(): any {
  yield all( [fork(watchGetUsersList), fork(watchCreateUser)] )
}

export default usersSaga

