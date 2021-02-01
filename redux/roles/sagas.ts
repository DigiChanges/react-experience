import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import Router from 'next/router'
import { 
  getAllRoles, 
  postRole, 
  putRole,  
  deleteRole  } from '../../services/rolesService';
import { notificationTypes, notification } from '../../entities/notification';
import { 
  GET_ROLES,
  CREATE_ROLE,
  UPDATE_ROLE,
  REMOVE_ROLE
} from './constants';
import { 
  startGeneralLoading, 
  stopGeneralLoading, 
  showGeneralNotification 
} from '../general/actions';
import { 
  getRolesSuccess,
  createRoleSuccess,
  updateRoleSuccess,
  removeRoleSuccess
} from './actions';

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

/**
 * Create new role
 */
function* createNewRole(
  {payload: {
    id, 
    name,
    slug,
    permissions
  }}) {
  yield put( startGeneralLoading() )
  try {
    const newRole = { id, name, slug, permissions }
    //create user
    const res = yield call( postRole, newRole )
    const { data } = res
    if (!data) return yield put( showErrorNotification('Internal Server Error') )

    /**
     * TODO:
     * CHECK SECOND API CONSUME
     * WAITING NATHAN SERVER CHANGES
     */
    
    yield put( showSuccessNotification('Role Created!') )
    yield put( createRoleSuccess(data) )
    Router.push('/roles')
  } catch (e) {
    yield put( showErrorNotification(e.message) )
  } finally {
    yield put( stopGeneralLoading() )
  }
}

function* updateRole({ payload: {
  id,
  name,
  slug,
  permissions,
  enable
}}) {
  yield put( startGeneralLoading() )
  try {
    const res = yield call( putRole, id, {name, slug, permissions, enable} )
    const { data } = res
    if (!data) return yield put( showErrorNotification('Internal Server Error') )
    yield put( showSuccessNotification('Role Updated!') )
    yield put( updateRoleSuccess(data) )
    Router.push('/roles')
  } catch (e) {
    yield put( showErrorNotification(e.message) )
  } finally {
    yield put( stopGeneralLoading() )
  }
}


function* removeRole({ payload: id }) {
  yield put( startGeneralLoading() )
  try {
    const res = yield call( deleteRole, id )
    const { data } = res
    if (!data) return yield put( showErrorNotification('Internal Server Error') )
    yield put( showSuccessNotification('Role Removed!') )
    yield put( removeRoleSuccess(data) )
    Router.push('/roles')
  } catch (e) {
    yield put( showErrorNotification(e.message) )
  } finally {
    yield put( stopGeneralLoading() )
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

export function* watchGetRoles(): any {
  // @ts-ignore
  yield takeEvery(GET_ROLES, getRolesList);
}
export function* watchCreateRole(): any {
  // @ts-ignore
  yield takeEvery(CREATE_ROLE, createNewRole);
}

export function* watchUpdateRole(): any {
  // @ts-ignore
  yield takeEvery(UPDATE_ROLE, updateRole);
}

export function* watchRemoveRole(): any {
  // @ts-ignore
  yield takeEvery(REMOVE_ROLE, removeRole)
}

function* rolesSagas(): any {
  yield all([
    fork(watchGetRoles),
    fork(watchCreateRole),
    fork(watchUpdateRole), 
    fork(watchRemoveRole)
  ])
}

export default rolesSagas;

