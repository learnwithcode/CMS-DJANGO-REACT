import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//local import here.
import './static/css/style.css'
// import Navigation from './Navigation';


function App() {
  return (
    <BrowserRouter>
      {/* <Navigation/> */}
      <h1>Hello World</h1>
    </BrowserRouter>  
  );
}

export default App;
