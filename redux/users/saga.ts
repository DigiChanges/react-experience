import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllUsers } from '../../services/usersService'

import { GET_USERS, GET_USERS_SUCCESS } from './constants'
import { notification, notificationTypes } from '../../entities/notification';
import { 
  startGeneralLoading, 
  stopGeneralLoading, 
  showGeneralNotification 
} from '../general/actions'
import { 
  getUsers, 
  getUserSuccess 
} from './actions'

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

export function* watchGetUsersList(): any {
  // @ts-ignore
  yield takeEvery(GET_USERS, getUsersList);
}

function* usersSaga(): any {
  yield all( [fork(watchGetUsersList)] )
}

export default usersSaga

