import { lazy } from 'react';
import { RoutesConfig } from './layout/router-outlet/RouterOutlet';


export const appRoutes: RoutesConfig = [
  {
    path: "beer",
    component: lazy(() => import('./beer/Beer')),
  },
  {
    path: '',
    exact: true,
    redirectTo: 'beer'
  }
];
