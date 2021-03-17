import { Redirect, Route, Switch } from 'react-router-dom';
import { ComponentType, createContext, Suspense, useContext } from 'react';


export interface RouteConfig<P = any> {
  path: string;
  component?: ComponentType<P>;
  exact?: boolean;
  redirectTo?: string;
}

export type RoutesConfig = RouteConfig[];

interface CommonRouteProps {
  route: RouteConfig;
  path: string;
  parent: string;
}

export const routeContext = createContext('');

function CommonRoute({ route, path, parent }: CommonRouteProps) {
  if (route.component) {
    return (
      <routeContext.Provider value={path}>
        <route.component/>
      </routeContext.Provider>
    );
  }
  if (route.redirectTo) {
    return (<Redirect to={`${parent}/${route.redirectTo}`}/>);
  }
  return (<div>Empty route</div>);
}

export default function RouterOutlet({ routes }: { routes: RoutesConfig }) {
  const parent = useContext(routeContext);

  return (
    <Switch>
      <Suspense fallback={<div>Загрузка...</div>}>
        {routes.map((route) => {
          const path = `${parent}/${route.path}`;
          return (
            <Route
              key={path}
              path={path}
              exact={route.exact}
            >
              <CommonRoute
                route={route}
                path={path}
                parent={parent}
              />
            </Route>
          );
        })}
      </Suspense>
    </Switch>
  );
}
