import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import { Avatar } from "react-native-paper";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");

  const onChangeText = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={50}
        source={require("../../assets/img/avatar.png")}
      />
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
