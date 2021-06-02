import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccss = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart()); // redux-thunk 부분
    //이게 fetchCollectionsStart -> 리듀서의 state를
    //true로 변경 시키고 아래 코드 진행

    collectionRef
      .get()
      .then((snapshot) => {
        //하단 코드는 백앤드로가서 fetch 하고 돌아와서 컬렉션 맵을 build
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //컬랙션 맵 성공 이후 async 결과받고  dispatch 처리함
        dispatch(fetchCollectionsSuccss(collectionsMap));
      })
      .catch((e) => dispatch(fetchCollectionsFailure(e.message)));
  };
};
