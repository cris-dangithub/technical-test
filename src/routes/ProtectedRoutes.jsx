import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Server from '../server/server';

const ProtectedRoutes = () => {
  const server = new Server();

  if (server.readToken()) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
