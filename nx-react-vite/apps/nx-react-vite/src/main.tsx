import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import HomePage from './app/pages/landingpage/homePage';
import Dashboard from "./app/pages/dashboard/dashboard";

import  { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router}>
      <HomePage />
    </RouterProvider>
  </StrictMode>
);
