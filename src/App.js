import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//local import here.
import './static/css/style.css'
import './static/css/three-dot.min.css'
import Navigation from './Navigation';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>  
  );
}

export default App;
