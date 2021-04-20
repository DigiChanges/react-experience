import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { notification, notificationTypes } from "../../entities";
import Router from "next/router";
import {
	getAllUsers,
	postUser,
	putUser,
	changeUserPassword,
	deleteUser,
	assignUserRole, getOneUser,
} from "../../services/usersService";

import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  CHANGE_PASSWORD_USER,
  REMOVE_USER,
} from "./constants";
import {
	startGeneralLoading,
	stopGeneralLoading,
	showGeneralNotification,
	nextQueryPagination,
} from "../general/actions";
import {
	getUsersSuccess,
	createUserSuccess,
	updateUserSuccess,
	removeUserSuccess, getUserSuccess,
} from "./actions";
import FilterFactory from "../../helpers/FilterFactory";

function* getUsersList({ payload })
{
  yield put(startGeneralLoading());

  try {

		const query = FilterFactory.getPath(payload.userFilterQueryParam, payload.nextQueryParamsPagination);

    const res = yield call(getAllUsers, query);
    const { data, pagination } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }

    yield put(getUsersSuccess(data));
    yield put(nextQueryPagination(pagination));

  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

function* getUser({ payload })
{
  yield put(startGeneralLoading());

  try {
    const res = yield call(getOneUser, payload);
    const { data } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }

    yield put(getUserSuccess(data));
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

/**
 * Create new user
 * Assign Role
 */
function* createNewUser({ payload })
{
  yield put(startGeneralLoading());

  try {
    const res = yield call(postUser, payload);
    const { data } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }

    /**
     * TODO:
     * CHECK SECOND API CONSUME
     */

    // assign roles
    if (payload.roles && payload.roles.length > 0) {
      const { id } = data;
      const rolesRes = yield call(assignUserRole, id, { rolesId: payload.roles });
      if (!rolesRes) {
        return yield put(showErrorNotification("Internal Server Error"));
      }
    }
    yield put(showSuccessNotification("User Created!"));
    yield put(createUserSuccess(data));
    Router.push("/users");
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

function* updateUser({ payload: { body, id } })
{
  yield put(startGeneralLoading());

  try {
    const res = yield call(putUser, body, id);
    const { data } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }

    //assign roles
    if (body.roles && body.roles.length > 0)
    {
      const { id } = data;
      const rolesRes = yield call(assignUserRole, id, { rolesId: body.roles });
      if (!rolesRes) {
        return yield put(showErrorNotification("Internal Server Error"));
      }
    }

    yield put(showSuccessNotification("User Updated!"));
    yield put(updateUserSuccess(data));
    Router.push("/users");
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

function* changePassword({ payload: { body, id } }) {
  yield put(startGeneralLoading());
  try {
    const res = yield call(changeUserPassword, body, id);
    const { data } = res;

    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }
    yield put(showSuccessNotification("Password Changed!"));
    Router.push("/users");
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

function* removeUser({ payload: id }) {
  yield put(startGeneralLoading());
  try {
    const res = yield call(deleteUser, id);
    const { data } = res;
    if (!data) {
      return yield put(showErrorNotification("Internal Server Error"));
    }
    yield put(showSuccessNotification("User Removed!"));
    yield put(removeUserSuccess(data));
    Router.push("/users");
  } catch (e) {
    yield put(showErrorNotification(e.message));
  } finally {
    yield put(stopGeneralLoading());
  }
}

const showSuccessNotification = (msg: string) =>
  showGeneralNotification(notification(notificationTypes.SUCCESS, msg));

const showErrorNotification = (msg: string) =>
  showGeneralNotification(notification(notificationTypes.ERROR, msg));

export function* watchGetUsersList(): any {
  // @ts-ignore
  yield takeEvery(GET_USERS, getUsersList);
}

export function* watchGetUser(): any {
  // @ts-ignore
  yield takeEvery(GET_USER, getUser);
}

export function* watchCreateUser(): any {
  // @ts-ignore
  yield takeEvery(CREATE_USER, createNewUser);
}

export function* watchUpdateUser(): any {
  // @ts-ignore
  yield takeEvery(UPDATE_USER, updateUser);
}

export function* watchChangeUserPassword(): any {
  // @ts-ignore
  yield takeEvery(CHANGE_PASSWORD_USER, changePassword);
}

export function* watchRemoveUser(): any {
  // @ts-ignore
  yield takeEvery(REMOVE_USER, removeUser);
}

function* usersSaga(): any {
  yield all([
    fork(watchGetUsersList),
    fork(watchGetUser),
    fork(watchCreateUser),
    fork(watchUpdateUser),
    fork(watchChangeUserPassword),
    fork(watchRemoveUser),
  ]);
}

export default usersSaga;
