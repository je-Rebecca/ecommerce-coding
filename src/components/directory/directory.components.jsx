import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/direcotry/directory.selectors';
import MenuItem from '../menu-item/menu-item.components';

import './directory.style.scss';
const Direcotry = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSetctionProps }) => (
        <MenuItem key={id} {...otherSetctionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Direcotry);
