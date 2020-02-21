
import React from 'react';
import style from './style.module.scss';


class Fondo extends React.Component{
   
  constructor(props){
    super(props);
    this.contenedorNieve = React.createRef(); /* ES como un querySelector, pero con react, o sea que hace referencia elementos*/
  }

  componentDidMount(){/*  cuando se termina de dibujar el componente, llama a esta funcion, osea lo que esta adentro*/
   this.dibujarSpans()
  }

   dibujarSpans = () => {
     let numSpans = 400;
     let spans;
     for(let i = 0 ; i < numSpans ; i++){
       spans += `<div> </div>`;
     };

     this.contenedorNieve.current.innerHTML = spans;

     let divs = this.contenedorNieve.current.children;
     
     for(let i = 0 ; i < divs.length; i++){
       divs[i].className += style.snow;
     }

    }
   render(){
      return(
        <div className={style.container}>
        <section ref={this.contenedorNieve} className={style.fixed}>

         </section>
        {this.props.children}
        </div>
    
    )
    }
    }
  export   default Fondo;