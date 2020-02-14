import React from 'react';
import './App.modules.scss';
import Galeria from './component/galeria1/galeria';
import Fondo from './component/index';
import Nav from './component/nav/index';

function App() {
  return (
    <div className="App">
    
      <Fondo>
       <Nav/>
        <h1 > Natalia Fleitas</h1>
          <Galeria />
      </Fondo>
    </div>
  );
}






export default App;
