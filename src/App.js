import React from 'react';

import Home from './pages/Home';
import styled, { createGlobalStyle } from 'styled-components';



function App() {
  return (
    <>
    <GlobalStyle/>
    <Home/>

    </>
  );
}
const GlobalStyle = createGlobalStyle`
font-family: 'Afacad';

`
export default App;
