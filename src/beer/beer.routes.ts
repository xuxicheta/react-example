
import { RoutesConfig } from '../shared/router-outlet/RouterOutlet';
import { BeerList } from './beer-list/BeerList';
import { BeerDetails } from './beer-details/BeerDetails';


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
