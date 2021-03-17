import { lazy } from 'react';
import { RoutesConfig } from './shared/router-outlet/RouterOutlet';


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


export function AppRoutes() {

}
