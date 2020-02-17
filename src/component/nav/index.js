import React from 'react';
import style from './style.module.scss';


class Nav extends React.Component{

    render(){
      return(
        <div className={style.otro}> 
            <nav className={style.nav}>
            <a className={style.uno} href="/enlace1/">Natalia Fleitas</a> 
                <a className={style.uno} href="/enlace1/">Contacto</a> 
                <a className={style.dos} href="/enlace2/">Sobre mi</a>
            </nav>
        </div>
    
    )
    }
    }
  export  default Nav ;