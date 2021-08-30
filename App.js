import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.caja1}>
      <Text>Hola Mundo!</Text>
      <Text>Es un bonito día </Text>
      <StatusBar style="auto" />
      </View>
      
      <View style={styles.caja2}>
      <Text style={styles.text}>Hola Mundo!</Text>
      <Text style={styles.text}>Es un bonito día </Text>
      <StatusBar style="auto" />
      </View>
      <View>
      <Image
      source={{ uri: 'https://picsum.photos/200' }}
      style={styles.image}
      />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  caja1:{
    flex:1,
    backgroundColor: '#FFAC33',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caja2:{
    flex:1,
    borderRadius:25,
    alignItems: 'center',
    backgroundColor: '#0000ff'
  },
  image:{
    flex:1,
    borderRadius:25,
    width:200,
    height:200
  },
  text:{
    color: '#ffffff'
  },
});
