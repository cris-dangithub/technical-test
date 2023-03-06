import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { server } = useSelector(state => state);

  if (server.readToken()) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
