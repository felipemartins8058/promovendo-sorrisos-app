import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Perfil = () => {

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Perfil</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title: {
      fontSize: 40,
      color: '#6BA0FF',
      fontWeight: '600',
      fontFamily: 'Poppins_600SemiBold',
      marginBottom:30,
    },
  })

export default Perfil;
