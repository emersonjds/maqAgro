import React from "react";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Cotations from "./screens/Cotations";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              color: "#000",
            },
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color="black" />
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
              <AntDesign name="arrowsalt" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
