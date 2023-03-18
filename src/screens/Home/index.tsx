import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";
import { Avatar, Searchbar } from "react-native-paper";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");

  const onChangeText = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Avatar.Image size={50} source={require("../../assets/img/avatar.png")} />

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Searchbar
          placeholder="Pesquise por algo para sua propriedade"
          numberOfLines={1}
          inputStyle={{ height: 50, alignSelf: "center" }}
          onChangeText={(text) => onChangeText(text)}
          value={text}
        />
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
            justifyContent: "center",
          }}
        >
          <Avatar.Image size={90} source={require("../../assets/img/1.jpeg")} />
          <Text
            style={{
              marginTop: 10,
            }}
          >
            Veiculos
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchbar: {
    width: "100%",
  },
});
