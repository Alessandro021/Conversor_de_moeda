import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';


export default class App extends Component{

  render(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Conversor  moedaA="BRL" moedaB="USD"/>
      <Conversor  moedaA="USD" moedaB="BRL"/>
    </View>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
