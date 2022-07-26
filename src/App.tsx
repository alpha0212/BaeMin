import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages';

export const App: React.FC = () => (
  <Routes>
    <Route index element={<MainPage />} />
  </Routes>
);
