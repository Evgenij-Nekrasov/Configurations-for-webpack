import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';

import App from '@/components/App';
import { LazyAbout, LazyContact } from './app/pages';

const container = document.getElementById('root');
const root = createRoot(container!);

if (!root) {
  throw new Error('Failed to find the root element');
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyContact />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
