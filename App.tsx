import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Divider, TextInput } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import Constants from 'expo-constants';
import { Avatar } from 'react-native-paper';
import { Button } from 'react-native-paper';




import React from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");


  const onChangeText = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      
     
      <Avatar.Image size={50} source={require('../maqAgro/src/assets/img/avatar.png')} />

    <View
      style={{
        marginTop: 20,
      }}
    >
    <Searchbar 
    placeholder="Pesquise por algo para sua propriedade"
    numberOfLines={1} inputStyle={{height: 50, alignSelf:"center"}} onChangeText={text => onChangeText(text)} value={text} />
    </View>

    <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginLeft: 20,
    }}
    >
      <View
       style={{
        alignItems: "center",
        marginTop: 20,
        justifyContent: 'center'
      }}>
      <Avatar.Image size={90} source={require('../maqAgro/src/assets/img/1.jpeg')} />
      <Text
        style={{
          marginTop: 10
        }}
      >
        Veiculos
      </Text>
      </View>

      
      <View
       style={{
        alignItems: "center",
        marginTop: 20,
        justifyContent: 'center'
      }}>
      <Avatar.Image size={90} source={require('../maqAgro/src/assets/img/3.jpeg')} />
      <Text
        style={{
          marginTop: 10
        }}
      >
        Ração
      </Text>
      </View>

      <View
       style={{
        alignItems: "center",
        marginTop: 20,
        justifyContent: 'center'
      }}>
      <Avatar.Image size={90} source={require('../maqAgro/src/assets/img/2.jpeg')} />
      <Text
        style={{
          marginTop: 10
        }}
      >
        Insumos
      </Text>
      </View>
    

    </View>

    

    <Divider style={{marginTop: 20}} />

    <View>
      <Text
      style={{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold"
      }}
      >
        Ultimos Adicionados
      </Text>
    </View>
      

      {/* <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchbar: {
    width: '100%',
  },
});
