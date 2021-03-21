import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/logo.png")}/>
        <Text style={styles.title}>Promovendo Sorrissos</Text>
        <RectButton style={styles.buttonPrimary} onPress={() => {}}>
            <Text style={styles.textButtonPrimary}>Login</Text>
        </RectButton>
        <RectButton style={styles.buttonSecondary} onPress={() => {}}>
          <Text style={styles.textButtonSecondary}>Conecte-se com Google</Text>
        </RectButton>
        <Text style={styles.text}>Não possui conta? Cadastre-se</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#fff'
    },
    title: {
      fontSize: 40,
      color: '#6BA0FF',
      fontWeight: '600',
      textAlign: 'center',
      fontFamily: 'Poppins_600SemiBold',
      marginBottom:30,
    },
    image: {
      width: 300,
      height: 300,
    },
    buttonPrimary: {
      backgroundColor: '#FCC956',
      width: 240,
      paddingVertical: 12,
      borderRadius: 9,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonSecondary: {
      width: 240,
      backgroundColor: '#EAEAEA',
      paddingVertical: 12,
      borderRadius: 9,
      alignItems: 'center',
      marginBottom: 20,
    },
    textButtonPrimary: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFF',
      fontFamily: 'OpenSans_700Bold'
    },
    textButtonSecondary: {
      fontSize: 16,
      color: '#909090',
      fontWeight: '400',
      fontFamily: 'OpenSans_400Regular'
    },
    text:{
      fontSize: 16,
      color: '#353535'
    },
  })

export default Home;

