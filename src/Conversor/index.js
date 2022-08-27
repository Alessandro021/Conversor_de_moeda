import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import api from '../services/api';


export default class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: "",
        }
        this.converter = this.converter.bind(this);
    }

    async converter(){
        let de_para = this.state.moedaA + "_" + this.state.moedaB;
        const response = await api.get(`currency/${de_para}?token=1429|qV0baryRBAs7erxonr7ytsNgt6BfIydq`)
        let cotacao = response.data[de_para].price

        if(this.state.moedaB_valor === "") this.setState({moedaB_valor: 0})

        let resultado = (cotacao * parseFloat(this.state.moedaB_valor))
 
        this.setState({valorConvertido: resultado.toFixed(2)})

        Keyboard.dismiss()// feixa o teclado apos clicar no botão converter

    }

    render(){
        const {moedaA, moedaB} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput style={styles.areaInput}
                placeholder='Insira o valor a ser convertido'
                keyboardType="numeric"
                onChangeText={(moedaB_valor)=> this.setState({moedaB_valor: (moedaB_valor).replace(',','.')})}
                />

                <TouchableOpacity  style={styles.areaBotao}
                    onPress={this.converter}
                >
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>

                <Text  style={styles.valorConvertido}>{(this.state.valorConvertido ===  0 ) ? "" : this.state.valorConvertido}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000"
    },
    areaInput:{
        width: 280,
        height: 55,
        backgroundColor: "#CCC",
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: "#000",
        borderRadius: 10
    },
    areaBotao:{
        width: 180,
        height: 55,
        backgroundColor: "#FF0000",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    botaoTexto:{
        fontSize: 22,
        fontWeight: 'bold',
        color: "#FFF"
    },
    valorConvertido:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000",
        marginTop: 15,
    }
})