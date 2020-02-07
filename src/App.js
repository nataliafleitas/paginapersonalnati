import React from 'react';
import logo from './logo.svg';
import './App.css';
import Galeria from './component/galeria1/galeria';

function App() {
  let nombre = 'pepe'
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Nati</h1>
        </p>
        <FormApp nombre={nombre} />
        <Galeria />

      </header>
    </div>
  );
}

class FormApp extends React.Component {
  state={
    nombre:'',
    apellido:'',
    localidad:''
  }
  enviar= (/*aca van los events, osea parametros*/)=>{ 
    let nombreInput= document.querySelector('#nombre').value;
    let apellidoInput= document.querySelector('#apellido').value;
    let localidadInput= document.querySelector('#localidad').value; 

    this.setState({
      nombre:nombreInput,
      apellido:apellidoInput,
      localidad:localidadInput,
    })
  }
  /*enviar=()=
  
  () =>{
    
  } Hcen lomismo
  function () {
    
  }*/ 
  render() {
    return (
      <div className="formulario">
        <label htmlFor="username"> Nombre de usuario</label>
        <input name="username" id="nombre" type="text" />
        <label htmlFor="userApellido"> Apellido</label>
        <input name="username" id="apellido" type="text" />
        <label htmlFor="useLocalidad">Localidad</label>
        <input name="username" id="localidad" type="text" />

        <input type="submit" value="enviar" onClick={this.enviar}/>
        <Comentario bre={this.state.nombre} apellido={this.state.apellido} localidad={this.state.localidad}/>
      </div>
    );
  }
}
function Comentario (props) {
  console.log(props)
  return(
    <div>
      <p>
        {props.bre}
      </p>
      <p> {props.apellido}</p>
      <p> {props.localidad}</p>
    </div>
  )
  
}



export default App;
