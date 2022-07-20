import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { CommunityWrite } from './components/common/Community/CommunityWrite';
import { MainPage } from './pages';
import { AuthPage } from './pages/auth';

export const App: React.FC = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <Navbar />
          <div className="container" style={{ marginTop: '2rem' }}>
            <Outlet />
          </div>
        </>
      }
    >
      <Route index element={<MainPage />} />
      <Route path="auth">
        <Route path="write" element={<CommunityWrite />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
      </Route>
    </Route>
  </Routes>
);
