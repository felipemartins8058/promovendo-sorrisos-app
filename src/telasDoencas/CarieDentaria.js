import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

const CarieDentaria = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <>
      <View backgroundColor="#A5374A" style={styles.container}>
        <View style={styles.containerWrap}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="chevron-left" color="#FFFFFF" size={26} />
          </TouchableOpacity>
          <Text style={styles.title}>Cárie Dentária</Text>
        </View>
      </View>

      <ImageBackground
        source={require("../assets/backgroundDesease.png")}
        style={styles.cover}
        resizeMode="stretch"
      ></ImageBackground>

      <SafeAreaView>
        <ScrollView style={styles.containerScroll}>
          <Text>
            A cárie dentária é uma doença multifatorial, açúcar biofilme
            dependente, que causa lesão no dente.
          </Text>
        </ScrollView>

        <Text>Locais de Atndimento</Text>
        <View>
          <View style={styles.flexx}>
            <RectButton style={styles.buttonMapsInd} onPress={() => {}}>
              <Icon name="map-marker-alt" color="#000000" size={24} />
            </RectButton>
            <RectButton style={styles.buttonMapsInd} onPress={() => {}}>
              <Icon name="map-marker-alt" color="#000000" size={24} />
            </RectButton>
          </View>
          <View>
            <RectButton style={styles.buttonMaps} onPress={() => {}}>
              <Text>Ver Mapa</Text>
            </RectButton>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  containerScroll: {
    marginTop: -40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
  },
  containerWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  cover: {
    width: "100%",
    paddingVertical: 0,
    marginTop: 0,
    height: 230,
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#727272",
    fontFamily: "OpenSans_700Bold",
    fontWeight: "600",
    marginVertical: 15,
  },
  text: {
    fontSize: 16,
    color: "#353535",
    fontFamily: "OpenSans_400Regular",
  },
  buttonMaps: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#FCC956",
    borderRadius: 40
  },
  buttonMapsInd: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: "#98BAFC",
    borderRadius: 8,
    width: 37
  },
    flexx:{
      display: "flex",
      flexDirection: "row"
    }
});

export default CarieDentaria;
