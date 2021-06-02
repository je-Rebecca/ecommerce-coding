import { all, call } from 'redux-saga/effects';
import { userSagas } from '../user/user.sagas';
import { fetchCollectionsStart } from './shop.sagas';

export default function* rootsaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
