import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import usersSaga from './users/saga';
import rolesSagas from './roles/sagas';

//TODO - CHECK THAT getState
export default function* rootSaga(): any
{
	yield all([
		authSaga(),
		usersSaga(),
		rolesSagas()
	]);
}
