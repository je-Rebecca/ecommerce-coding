import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selestCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollecionsForPreview = createSelector(
  [selestCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selestCollections],
    (collections) => collections[collectionUrlParam]
  );
