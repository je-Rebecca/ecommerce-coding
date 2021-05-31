import React from 'react';
import './homepage.style.scss';
import Directory from '../../components/directory/directory.components.jsx';
import { HomepageContainer } from './homepage.styles';
const Homepage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
);
export default Homepage;
