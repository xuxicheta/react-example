import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/header/Header';
import RouterOutlet from './shared/router-outlet/RouterOutlet';
import { appRoutes } from './app.routes';
import { RootStore } from './shared/root.store';


export default function App() {
  return (
    <BrowserRouter>
      <RootStore.Provider>
        <Header/>
        <RouterOutlet routes={appRoutes}/>
      </RootStore.Provider>
    </BrowserRouter>
  );
}
