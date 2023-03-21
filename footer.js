import { LinearGradient } from "expo-linear-gradient";
import estilo from "../estilos";
import { View, TouchableOpacity, Text} from 'react-native';

export default function Footer(){
    return(
        <View style = {estilo.footer}>
            <TouchableOpacity style = {{width:'80%'}}>
                    <Text style ={estilo.textF} >esqueci minha senha </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{width:'80%'}}>
                    <Text style ={estilo.textF} >Cadastrar</Text>
            </TouchableOpacity>
          </View>
    );
}