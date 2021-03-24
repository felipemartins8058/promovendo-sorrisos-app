import React from "react";
import Constants from "expo-constants";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView from "react-native-maps";

const Pontos = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="chevron-left" color="#6BA0FF" size={26} />
        </TouchableOpacity>
        <Text style={styles.title}>Mapa</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -3.7899266,
            longitude: -38.5889876,
            latitudeDelta: 0.14,
            longitudeDelta: 0.14,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  containerTitle: {
    position: "absolute",
    top: 60,
    left: 32,
    zIndex: 99,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 40,
    color: "#6BA0FF",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 20,
  },
  mapContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Pontos;
