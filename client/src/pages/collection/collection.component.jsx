import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections } from '../../redux/shop/shop.selector';
import './collection.styles.scss';
const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   const unsubscribeFromCollections = firestore
  //     .collection('collections')
  //     .onSnapshot((snapshot) => console.log(snapshot));

  //   return () => {
  //     console.log('i am unsubscribing');
  //     unsubscribeFromCollections();
  //   };
  // }, []);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
