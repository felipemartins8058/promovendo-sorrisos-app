import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesome5 as Icon } from "@expo/vector-icons";

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Atendimento from './pages/Atendimento';
import Sobre from './pages/Sobre';
import Pontos from './pages/Pontos';
import Perfil from './pages/Perfil';
import Doencas from './pages/Doencas';

import CarieDentaria from './telasDoencas/CarieDentaria'

const AppStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Footer() {
    return (
      <Tab.Navigator
        initialRouteName="Atendimento"
        activeColor="#ffffff"
        barStyle={{ backgroundColor: "#6BA0FF" }}
      >
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Atendimento"
          component={Atendimento}
          options={{
            tabBarLabel: "Atendimento",
            tabBarIcon: ({ color }) => (
              <Icon name="tooth" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarLabel: "Sobre",
            tabBarIcon: ({ color }) => (
              <Icon name="puzzle-piece" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFFFFF',
                }
            }}>
                <AppStack.Screen name="Doencas" component={Doencas} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="Atendimento" component={Footer} />
                <AppStack.Screen name="Sobre" component={Sobre} />
                <AppStack.Screen name="Pontos" component={Pontos} />
                <AppStack.Screen name="Perfil" component={Perfil} />
                <AppStack.Screen name="CarieDentaria" component={CarieDentaria} />
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;