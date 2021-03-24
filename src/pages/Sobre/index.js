import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Footer from "../Footer";

const Sobre = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/sobreCapa.png")}
        style={styles.cover}
        resizeMode="stretch"
      >
        <Text style={styles.title}>Sobre</Text>
      </ImageBackground>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.subtitle}>Promovendo Sorrisos</Text>
          <Text style={styles.text}>
            O projeto Promovendo Sorrisos é um projeto de extensão vinculado a
            faculdade de odontologia (ufc), ativo desde o ano de 2012 e com o
            objetivo de promoção em saúde bucal, seja educando pacientes com
            autismo e pais, educadores e cuidadores para que gere qualidade de
            vida, prevenção odontológica e inclusão desses pacientes no ambiente
            odontológico.
          </Text>

          <Text style={styles.subtitle}>Objetivos do projeto</Text>
          <Text style={styles.text}>
            - “Promover educação em saúde para crianças e adolescentes com
            autismo”
          </Text>
          <Text style={styles.text}>
            - “Gerar conhecimento, vivências e dar assistência ao público
          </Text>
          <Text style={styles.text}>
            - Alvo com a participação dos acadêmicos da graduação de
            odontologia”
          </Text>
          <Text style={styles.text}>
            - “Instruir pais e pacientes para o autocuidado, estimulando a
            independência individual dos pacientes com o cuidado oral”
          </Text>
          <Text style={styles.text}>
            - “Enriquecer os relacionamentos sociais, com a proporção de
            atividades lúdicas, educacionais para pessoas com transtorno de
            espectro autista”
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  cover: {
    width: "100%",
    padding: 0,
    marginTop: 36,
    height: 100,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
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
});

export default Sobre;
