import React from 'react';
import { useRoutes } from 'react-router-dom';
import AuthTabs from './pages/auth/auth-tabs/AuthTabs';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '',
      element: <AuthTabs />
    },
    {}
  ]);

  return elements;
};
