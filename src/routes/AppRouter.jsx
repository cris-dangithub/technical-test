import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/protected/Profile';
import Signin from '../pages/Signin';

// PAGE COMPONENTS
import Home from './../pages/Home';
import Login from './../pages/Login';
import NotFound from './../pages/NotFound';
import ProtectedRoutes from './ProtectedRoutes';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* 404 Page*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
