import React, { useState } from "react";
import { Avatar, Divider, Searchbar, Text } from "react-native-paper";
import { Box } from "../../components/Spacing";

import * as S from "./styles";
import { categoriesData } from "./category";
import { Title } from "../../components/Texts";
import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const onChangeText = (query) => setSearchQuery(query);

  const goToInputs = () => {
    navigation.navigate("Inputs");
  };

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
            <Box justifyContent="center" alignItems="center"
              key={item.id}
            >
              <TouchableOpacity
                onPress={() => {
                  if (item.name === "Insumos") {
                    goToInputs();
                  }
                }}
              >
                <Avatar.Image size={90} source={item.image} />
              </TouchableOpacity>
              <S.Text>{item.name}</S.Text>
            </Box>
          ))}
        </Box>
        <Box mt={20}>
          <Divider />
        </Box>
        <Box mt={20} ml={20}>
          <Title>Ultimos Adicionados</Title>
        </Box>
      </ScrollView>
    </S.Container>
  );
};

export default HomeScreen;
