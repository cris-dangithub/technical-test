import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fights from '../pages/Fights';
import Favorites from '../pages/protected/Favorites';
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
      <Route path="/fights" element={<Fights />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      {/* 404 Page*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
