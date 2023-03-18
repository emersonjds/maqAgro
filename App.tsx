import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import Constants from 'expo-constants';


import React from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");

  const onChangeText = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      
      <Searchbar numberOfLines={1} inputStyle={{height: 50, alignSelf:"center"}} onChangeText={text => onChangeText(text)} value={text} />


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
