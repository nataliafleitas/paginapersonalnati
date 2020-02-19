import React from 'react';
import style from './style.module.scss';


class Nav extends React.Component{

    render(){
      return(
        <div className={style.otro}> 
          <h2> NATALIA FLEITAS</h2>
          <nav className={style.nav}>
             <a  href="/enlace2/">SobreMi</a>
             <a  href="/enlace1/">Contacto</a> 
            </nav>
        </div>
    
    )
    }
    }
  export  default Nav ;