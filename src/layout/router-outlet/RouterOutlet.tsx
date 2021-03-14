import { Redirect, Route, Switch } from 'react-router-dom';
import React, { ComponentType, createContext, Suspense, useContext } from 'react';


export interface RouteConfig<P = any> {
  path: string;
  component?: ComponentType<P>;
  exact?: boolean;
  redirectTo?: string;
}

export type RoutesConfig = RouteConfig[];

export const routeContext = createContext('');

export default function RouterOutlet({ routes }: { routes: RoutesConfig }) {
  const parent = useContext(routeContext);

  return (
    <Switch>
      <Suspense fallback={<div>Загрузка...</div>}>
        {
          routes.map((route) => {
            let result = (<div>Empty route</div>);
            const path = `${parent}/${route.path}`;
            const to = `${parent}/${route.redirectTo}`;

            if (route.component) {
              result = (
                <routeContext.Provider value={path}>
                  <route.component/>
                </routeContext.Provider>
              );
            }
            if (route.redirectTo) {
              result = (<Redirect to={to!}/>);
            }

            return (
              <Route
                key={path}
                path={path}
                exact={route.exact}
              >
                {result}
              </Route>
            );
          })
        }
      </Suspense>
    </Switch>
  );
}
