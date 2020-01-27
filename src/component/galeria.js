import React, {Component} from 'react';


var i = 0;
var images = [];
var time = 3000;

images[0] = 'src/component/imgagenes/equipo.jpg';
images[1] = 'src/component/imgenes/naruto.jpg';
images[2] = 'src/component/imgenes/sasuke.jpg';


function galeria(){
    document.slides.src = images[i];

    if(i < images.length -1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("galeria()", time);
} 
//FALTA RETURN Y VA EN MAYUSCULAS y dibujar

export default galeria;