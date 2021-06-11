import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { createSelectorCreator, createStructuredSelector } from 'reselect';
//march location history 가 app에서 전달
//여기서 match는 /shop

// const CollecctionOverviewWithSpinner = WithSpinner(CollectionOverview);
const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        // component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        // component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
