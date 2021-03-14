import BeerList from './beer-list/BeerList';
import BeerDetails from './beer-details/BeerDetails';
import { RoutesConfig } from '../layout/router-outlet/RouterOutlet';


export const beerRoutes: RoutesConfig = [
  {
    path: 'list',
    component: BeerList,
  },
  {
    path: 'details',
    component: BeerDetails,
  },
  {
    path: '',
    exact: true,
    redirectTo: 'list'
  }
];
