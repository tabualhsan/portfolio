
import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';


import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;