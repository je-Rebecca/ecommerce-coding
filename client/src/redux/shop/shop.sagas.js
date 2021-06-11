//saga code : async action into the saga generation styles
//Listen every action specific type that I pass it
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

//call effect, inovke the method in the generator function
//call이 생각보다 오래 걸릴수있으니 yield 함
//call (some function or method   , 첫번째 파라미터(함수/메소드)로 전달할 파라미터 )
//execution이 saga middleware로 감

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    //promise 대신 generator
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //put creating the action (아래에서 함수 실행하고 collectionsMap전달)
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
//take every get other generator function run, response to this listener
//다른 제너레이터 값이 두번째 값으로 들어옴
export function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
//what the saga middleware do  : conqure. (it not block the execution )
//사가 여러개 있을때, db가질러갈때 멈추지 않도록... (영향 받지 않도록)
//yield controll back to the libriaary

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
