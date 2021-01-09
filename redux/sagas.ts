import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import usersSaga from './users/saga';

export default function* rootSaga(getState: any): any {
    yield all([authSaga(), usersSaga()]);
}
