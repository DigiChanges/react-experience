import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getAllRoles } from '../../services/rolesService';
import { notificationTypes, notification } from '../../entities/notification';
import { GET_ROLES } from './constants';
import { showGeneralNotification } from '../general/actions';
import { getRolesSuccess } from './actions';

function* getRolesList() {
  // yield put( startGeneralLoading() )
  try {
    const res = yield call( getAllRoles )
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
    yield put( getRolesSuccess(data) )
  } catch (e) {
    yield put(
      showGeneralNotification(
        notification(
          notificationTypes.ERROR, 
          e.message
        )
      )
    )
  } 
  // finally {
  //   yield put( stopGeneralLoading() )
  // }
}

export function* watchGetRoles(): any {
  // @ts-ignore
  yield takeEvery(GET_ROLES, getRolesList);
}

function* rolesSagas(): any {
  yield all([
    fork(watchGetRoles)
  ])
}

export default rolesSagas;

