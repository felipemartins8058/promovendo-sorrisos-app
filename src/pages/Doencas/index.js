import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { RectButton } from "react-native-gesture-handler";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Doencas = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerWrap}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="chevron-left" color="#6BA0FF" size={26} />
          </TouchableOpacity>
          <Text style={styles.title}>Doenças</Text>
        </View>

        <Searchbar
          placeholder="Pesquisar"
          onChangeText={() => {}}
          value={() => {}}
        />

        <Text style={styles.subtitle}>Categorias</Text>
      </View>

      <SafeAreaView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 9 }}
        >
          <RectButton backgroundColor="#E8D0F4" style={styles.buttonCategory}>
            <View style={styles.labelTextSide}>
              <Text style={styles.textButtonCardSecondary}>Mandibula</Text>
            </View>
          </RectButton>

          <RectButton backgroundColor="#FDDF9A" style={styles.buttonCategory}>
            <View style={styles.labelTextSide}>
              <Text style={styles.textButtonCardSecondary}>Dentes</Text>
            </View>
          </RectButton>

          <RectButton backgroundColor="#A6C6FF" style={styles.buttonCategory}>
            <View style={styles.labelTextSide}>
              <Text style={styles.textButtonCardSecondary}>Dentes</Text>
            </View>
          </RectButton>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>Todas as doenças</Text>
      </View>

      <SafeAreaView style={styles.flexSafeArea}>
        <ScrollView style={styles.containerScroll}>
          <RectButton
            style={styles.buttonList}
            onPress={() => {}}
          >
            <View style={styles.labelTextSide}>
              <Text style={styles.text}>Cárie Dentaria</Text>
            </View>
            <View
              style={styles.labelGrauGravidade}
              backgroundColor="#F4F373"
            ></View>
          </RectButton>

          <RectButton
            style={styles.buttonList}
            onPress={() => {}}
          >
            <View style={styles.labelTextSide}>
              <Text style={styles.text}>Luxação</Text>
            </View>
            <View
              style={styles.labelGrauGravidade}
              backgroundColor="#F29078"
            ></View>
          </RectButton>

          <RectButton
            style={styles.buttonList}
            onPress={() => {}}
          >
            <View style={styles.labelTextSide}>
              <Text style={styles.text}>Periconarite</Text>
            </View>
            <View
              style={styles.labelGrauGravidade}
              backgroundColor="#F29078"
            ></View>
          </RectButton>

          <RectButton
            style={styles.buttonList}
            onPress={() => {}}
          >
            <View style={styles.labelTextSide}>
              <Text style={styles.text}>Mucocele</Text>
            </View>
            <View
              style={styles.labelGrauGravidade}
              backgroundColor="#98BAFC"
            ></View>
          </RectButton>

          <RectButton
            style={styles.buttonList}
            onPress={() => {}}
          >
            <View style={styles.labelTextSide}>
              <Text style={styles.text}>Amelogênese imperfeita</Text>
            </View>
            <View
              style={styles.labelGrauGravidade}
              backgroundColor="#F4F373"
            ></View>
          </RectButton>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  containerTitle: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flexSafeArea: {
    flex: 1,
  },
  containerScroll: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  containerWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#6BA0FF",
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 20,
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
  buttonList: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    paddingLeft: 16,
    paddingVertical: 16,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    elevation: 1,
  },
  labelTextSide: {
    width: "80%",
  },
  labelGrauGravidade: {
    width: "10%",
    height: "50%",
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  buttonCategory: {
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    width: 140,
    height: 100,
    marginRight: 10,
    elevation: 6,
  },
  textButtonCardSecondary: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#444444",
    marginTop: 40,
  },
});

export default Doencas;
