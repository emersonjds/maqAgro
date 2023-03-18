import React, { useState } from "react";
import { Avatar, Divider, Searchbar, Text } from "react-native-paper";
import { Box } from "../../components/Spacing";

import * as S from "./styles";
import { categoriesData } from "./category";
import { Title } from "../../components/Texts";
import { ScrollView } from "react-native";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");

  const onChangeText = (query) => setSearchQuery(query);

  return (
    <S.Container>
      <Avatar.Image size={50} source={require("../../assets/img/avatar.png")} />
      <Box mt={20}>
        <Searchbar
          placeholder="Pesquise por algo para sua propriedade"
          numberOfLines={1}
          inputStyle={{ height: 50, alignSelf: "center" }}
          onChangeText={(text) => onChangeText(text)}
          value={text}
        />
      </Box>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Box mt={20} flexDirection="row" justifyContent="space-between">
          {categoriesData.map((item) => (
            <Box justifyContent="center" alignItems="center">
              <Avatar.Image size={90} source={item.image} />
              <S.Text>{item.name}</S.Text>
            </Box>
          ))}
        </Box>
        <Box mt={20}>
          <Divider />
        </Box>
        <Box mt={20} ml={20}>
          <Title>Ultimoss Adicionados</Title>
        </Box>
      </ScrollView>
    </S.Container>
  );
};

export default Home;
