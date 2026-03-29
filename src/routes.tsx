import { lazy, type ComponentType } from 'react';

const Home = lazy(() => import('./pages/Home'));
const AapnBazaar = lazy(() => import('./pages/AapnBazaar'));
const GolaMart = lazy(() => import('./pages/GolaMart'));
const Startups = lazy(() => import('./pages/Startups'));
const MyProduct = lazy(() => import('./pages/MyProduct'));
const AdminGolaMart = lazy(() => import('./pages/AdminGolaMart'));

interface RouteConfig {
  name: string;
  path: string;
  component: ComponentType;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    visible: true,
  },
  {
    name: 'AapnBazaar',
    path: '/aapnbazaar',
    component: AapnBazaar,
    visible: true,
  },
  {
    name: 'GolaMart',
    path: '/golamart',
    component: GolaMart,
    visible: true,
  },
  {
    name: 'GoStratups',
    path: '/startups',
    component: Startups,
    visible: true,
  },
  {
    name: 'My Product',
    path: '/my-product',
    component: MyProduct,
    visible: true,
  },
  {
    name: 'Admin GolaMart',
    path: '/admin/golamart',
    component: AdminGolaMart,
  },
];

export default routes;
