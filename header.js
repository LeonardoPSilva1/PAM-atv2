import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'react-native';
import estilo from '../estilos.js'

export default function Header(){
    return(
      <LinearGradient
        colors = {['black','#FF4500']}
        style = {estilo.gradientBackColor}
      >
        <Image source = {{uri:'https://img.ifunny.co/images/8fe6b91e0458fb7d63c99b61b9dd023759ee0810ce9d9696a192bc0a08093983_1.jpg'}}
        style ={estilo.image}/>
        </LinearGradient>
    );
}