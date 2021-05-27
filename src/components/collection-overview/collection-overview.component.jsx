import React from 'react';
import { connect } from 'react-redux';
import './collection-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import CollectionPreviw from '../../components/preview-collection/preview-collection.components';
import { selectCollecionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreviw key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollecionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
