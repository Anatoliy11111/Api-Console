import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { ConsolePage } from 'components/ConsolePage/ConsolePage';
import { LoginPage } from 'components/Login/LoginPage';

export const RoutesMenu = () => (
  <Routes>
    {/* <Route path="/" element={<LoginPage />} /> */}
    <Route path="/" element={<ConsolePage />} />
    {/* <Route path="/consolePage" element={<ConsolePage />} /> */}
    <Route path="*" element={<LoginPage />} />
    {/* <Route path="consolePage" element={< />} /> */}
  </Routes>
);
