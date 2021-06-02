import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selestCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollecionsForPreview = createSelector(
  [selestCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selestCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

//loading 체크 로드시 true
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
