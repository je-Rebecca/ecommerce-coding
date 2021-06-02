import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from '../../firebase/firebase.utils';
import { googleSingInFailure, googleSingInSueccess } from './user.actions';
import UserActionTypes from './user.types';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSingInSueccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSingInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
