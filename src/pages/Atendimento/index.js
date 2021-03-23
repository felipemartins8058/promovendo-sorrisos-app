import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Atendimento = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atendimento</Text>

      <RectButton style={styles.buttonCard} onPress={() => {}}>
        <View style={styles.buttonCardTextSide}>
          <Text style={styles.textButtonCardPrimary}>Diagnóstico</Text>
          <Text style={styles.textButtonCardSecondary}>
            Formulário odontológico
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/formAtendimento.png")}
          />
        </View>
      </RectButton>

      <RectButton style={styles.buttonCard} onPress={() => {}}>
        <View style={styles.buttonCardTextSide}>
          <Text style={styles.textButtonCardPrimary}>Mapa de Locais</Text>
          <Text style={styles.textButtonCardSecondary}>
            Centros de atedimento odontológicos
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/mapaAtendimento.png")}
          />
        </View>
      </RectButton>

      <RectButton style={styles.buttonCard} onPress={() => {}}>
        <View style={styles.buttonCardTextSide}>
          <Text style={styles.textButtonCardPrimary}>Lista de Doenças</Text>
          <Text style={styles.textButtonCardSecondary}>
            Informações sobre possíveis doenças
          </Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/listaAtendimento.png")}
          />
        </View>
      </RectButton>
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
    color: "#6BA0FF",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 30,
  },
  buttonCard: {
    backgroundColor: "#D9B1EC",
    borderRadius: 8,
    paddingLeft: 16,
    paddingVertical: 13,
    flexDirection: "row",
    marginBottom: 30,
    elevation: 5,
  },
  buttonCardTextSide: {
    width: "65%",
  },
  buttonCardImageSide: {
    alignItems: "flex-end",
  },
  textButtonCardPrimary: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 4,
  },
  textButtonCardSecondary: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 4,
  },
  image: {
    resizeMode: "contain",
    width: 100,
  },
  text: {
    fontSize: 16,
    color: "#353535",
  },
});

export default Atendimento;
