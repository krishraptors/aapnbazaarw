import Home from './pages/Home';
import MyProduct from './pages/MyProduct';
import AdminGolaMart from './pages/AdminGolaMart';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    visible: true,
  },
  {
    name: 'My Product',
    path: '/my-product',
    element: <MyProduct />,
    visible: true,
  },
  {
    name: 'Admin GolaMart',
    path: '/admin/golamart',
    element: <AdminGolaMart />,
  },
];

export default routes;
