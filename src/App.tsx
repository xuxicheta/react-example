import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layout/header/Header';
import RouterOutlet from './shared/router-outlet/RouterOutlet';
import { appRoutes } from './app.routes';
import { HeaderContext } from './layout/header/header.context';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderContext.Provider>
        <Header/>
        <RouterOutlet routes={appRoutes}/>
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}
