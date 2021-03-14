import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layout/header/Header';
import RouterOutlet from './layout/router-outlet/RouterOutlet';
import { appRoutes } from './app.routes';
import { HeaderLinkProvider } from './layout/header/header.context';

export default function App() {
  return (
    <BrowserRouter>
      <HeaderLinkProvider>
        <Header/>
        <RouterOutlet routes={appRoutes}/>
      </HeaderLinkProvider>
    </BrowserRouter>
  );
}
