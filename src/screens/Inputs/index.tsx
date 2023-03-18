import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Divider, Text, Title } from "react-native-paper";

import { Box } from "../../components/Spacing";
import { agribusinessItems } from "./inputData";

const Inputs: FC = () => {
  const navigation = useNavigation();

  const goToDetails = (item) => () => {
    navigation.navigate("Details", { item });
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Box ml={20} mt={20}>
        <Title>Sugeridos para voce</Title>
        <Box mt={10} mb={10}>
          <Divider />
        </Box>
      </Box>
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          {agribusinessItems.map((item) => (
            <TouchableOpacity onPress={goToDetails(item)} key={item.id}>
              <Box
                alignItems="center"
                justifyContent="center"
                borderRadius={10}
                borderWidth={1}
                width={120}
                padding={10}
                mr={10}
              >
                <Image
                  source={item.image}
                  style={{ width: 100, height: 100 }}
                />
                <Box mt={10}>
                  <Text>{item.name}</Text>
                  <Text>Fração {item.fraction}</Text>
                  <Text>Preço R$ {item.price}</Text>
                </Box>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Box>

      <Box mt={10} mb={10}>
        <Divider />
      </Box>
    </View>
  );
};

export default Inputs;
