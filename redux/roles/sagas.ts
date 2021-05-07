import Router from 'next/router';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { getAllRoles, postRole, putRole, deleteRole, getOneRole } from '../../services/rolesService';
import {
  GET_ROLES,
  GET_ROLE,
  CREATE_ROLE,
  UPDATE_ROLE,
  REMOVE_ROLE
} from './constants';
import {startGeneralLoading, stopGeneralLoading, nextQueryPagination} from '../general/actions';
import { getRolesSuccess, getRoleSuccess, removeRoleSuccess } from './actions';
import FilterFactory from "../../helpers/FilterFactory";
import {showErrorNotification, showSuccessNotification} from "../general/saga";

function* getRolesList({payload})
{
	yield put(startGeneralLoading());

    try
	{
	    const {userFilterQueryParam, nextQueryParamsPagination} = payload;
	    let query;

	    if (userFilterQueryParam || nextQueryParamsPagination)
	    {
            query = FilterFactory.getPath(payload.userFilterQueryParam, payload.nextQueryParamsPagination);
        }

		const res = yield call(getAllRoles, query);
		const {data, pagination} = res;

		if (!data) {
            return yield put(showErrorNotification("Internal Server Error"));
        }

        yield put(getRolesSuccess(data, pagination));

        if (pagination)
        {
          yield put(nextQueryPagination(pagination));
        }

	  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

function* getRole({ payload })
{
  yield put(startGeneralLoading());

  try {
    const res = yield call(getOneRole, payload);
    const { data } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }

    yield put(getRoleSuccess(data));
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

/**
 * Create new role
 */
function* createNewRole({payload})
{
	yield put(startGeneralLoading())
	try
	{
		//create user
		const res = yield call(postRole, payload)
		const {data} = res

		if (!data)
		{
      return yield put(showErrorNotification("Internal Server Error"));
		}

		yield put(showSuccessNotification('Role Created!'))
		Router.push('/roles')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

function* updateRole({ payload: { body, id } })
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(putRole, id, body)
		const {data} = res
		if (!data)
		{
      return yield put(showErrorNotification("Internal Server Error"));
		}
		yield put(showSuccessNotification('Role Updated!'))
		Router.push('/roles')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}


function* removeRole({payload: id})
{
	yield put(startGeneralLoading())
	try
	{
		const res = yield call(deleteRole, id)
		const {data} = res
		if (!data)
		{
			return yield put(showErrorNotification('Internal Server Error'))
		}
		yield put(showSuccessNotification('Role Removed!'))
		yield put(removeRoleSuccess(data))
		Router.push('/roles')
	} catch (e)
	{
		yield put(showErrorNotification(e.message))
	} finally
	{
		yield put(stopGeneralLoading())
	}
}

export function* watchGetRoles(): any
{
	// @ts-ignore
	yield takeEvery(GET_ROLES, getRolesList);
}

export function* watchGetRole(): any
{
	// @ts-ignore
	yield takeEvery(GET_ROLE, getRole);
}

export function* watchCreateRole(): any
{
	// @ts-ignore
	yield takeEvery(CREATE_ROLE, createNewRole);
}

export function* watchUpdateRole(): any
{
	// @ts-ignore
	yield takeEvery(UPDATE_ROLE, updateRole);
}

export function* watchRemoveRole(): any
{
	// @ts-ignore
	yield takeEvery(REMOVE_ROLE, removeRole)
}

function* rolesSagas(): any
{
	yield all([
		fork(watchGetRoles),
        fork(watchGetRole),
		fork(watchCreateRole),
		fork(watchUpdateRole),
		fork(watchRemoveRole)
	])
}

export default rolesSagas;
