import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import { LayoutWrapper, LayoutMain } from './styles';
import { GlobalStyles } from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
