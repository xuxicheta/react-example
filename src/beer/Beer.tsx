import React from 'react';
import RouterOutlet from '../layout/router-outlet/RouterOutlet';
import { beerRoutes } from './beer.routes';

export default function Beer() {
  return (
    <RouterOutlet routes={beerRoutes}/>
  );
}







