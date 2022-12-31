import React from 'react';
import { Outlet } from 'react-router-dom';
import Book from '../Book';

function Layout() {
  return (
    <>
      <Book />
      <Outlet />
    </>
  );
}

export default Layout;
