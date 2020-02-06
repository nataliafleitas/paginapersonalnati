import React from 'react';
import logo from './logo.svg';
import './App.css';
import Galeria from './component/galeria1/galeria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Nati</h1>
        </p>
        <FormApp />
        <Galeria />

      </header>
    </div>
  );
}

class FormApp extends React.Component {
  render() {
    return (
      <div className="formulario">
        <label htmlFor="username"> Nombre de usuario</label>
        <input name="username" id="username" type="text" />
        <label htmlFor="userApellido"> Apellido</label>
        <input name="username" id="username" type="text" />
        <label htmlFor="useLocalidad">Localidad</label>
        <input name="username" id="username" type="text" />
        <label htmlFor="useEmail"> Email</label>
        <input type="submit" value="enviar" />

      </div>
    );
  }
}


export default App;
