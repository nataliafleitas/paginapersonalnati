import React from 'react';
import './galeria.css';
import tres from './imagenes/tres.png';
import pajaros from './imagenes/pajaros.png';
import equipo2 from './imagenes/equipo2.jpg';
import naruto from  './imagenes/naruto.jpg';
import naruto1 from './imagenes/naruto1.jpg';
import naruto2 from './imagenes/naruto2.jpg';
import sasuke from  './imagenes/sasuke.jpg';
import sasuke1 from './imagenes/sasuke1.jpg';
import sasuke2 from './imagenes/sasuke2.jpg';

class Galeria extends React.Component{
    handleClick= position => this.props.onClick(position);
render(){
    return(
        <div  className="contenedor">
        <h1>Fleitas </h1>
       
        <div className="imagen">
            
        
        </div>
        </div>
        
       /* <div  className="contenedor">
        <h1>Fleitas </h1>
       
        <div className="imagen">
            <img src={tres} onClick={()=> this.handleClick(0)} alt="tres" className="img"/>
            <img src={pajaros} onClick={()=> this.handleClick(1)} alt="equipo1" className="img"/>
            <img src={equipo2} onClick={()=> this.handleClick(2)} alt="equipo2" className="img"/>
            <img src={naruto} onClick={()=> this.handleClick(3)} alt="naruto" className="img"/>
            <img src={naruto1} onClick={()=> this.handleClick(4)} alt="naruto1" className="img"/>
            <img src={naruto2} onClick={()=> this.handleClick(5)} alt="naruto2" className="img"/>
            <img src={sasuke} onClick={()=> this.handleClick(6)} alt="sasuke" className="img"/>
            <img src={sasuke1} onClick={()=> this.handleClick(7)} alt="sasuke1" className="img"/>
            <img src={sasuke2} onClick={()=> this.handleClick(9)} alt="sasuke2" className="img"/>
        </div>
        </div>*/
        
        
    )
}
}


export default Galeria;