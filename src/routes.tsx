import React from "react";
import Details from "./screens/Details";
import Cotations from "./screens/Cotations";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inputs from "./screens/Inputs";
import HomeScreen from "./screens/Home";
import MyRequests from "./screens/MyRequests";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarLabel: "Meus Pedidos",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cotações"
        component={Cotations}
        options={{
          tabBarLabel: "Cotações",
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="barschart" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inputs"
          component={Inputs}
          options={{
            title: "Insumos",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Detalhes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
