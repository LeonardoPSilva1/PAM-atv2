import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import estilo from '../estilos.js'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View,TextInput, TouchableOpacity, Text} from 'react-native';
import Footer from './footer.js';


export default function Box(){
    return(
        <View style = {estilo.box}>
            <View style = {estilo.viewIcons}>
                <Feather name="user" size={24} color="black" />
                <TextInput style = {estilo.input} placeholder='e-mail' />
            </View>
            <View style = {estilo.viewIcons}>
                <Ionicons name="key-outline" size={24} color="black" />
                <TextInput style = {estilo.input} placeholder='senha' />
            </View>

          <TouchableOpacity style = {{width:'80%'}}>
            <LinearGradient
              colors ={['#D2691E','#FF4500']}
              style={estilo.button}
              >
                <Text style ={estilo.text} >Logar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Footer></Footer>
      </View>
    );
}