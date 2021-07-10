import React from 'react';

import { MoviesContextProvider } from './contexts/MoviesContext';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';

export function App() {


  return (
    <MoviesContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContextProvider>
  )
}