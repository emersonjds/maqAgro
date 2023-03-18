import React, { FC } from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import { Card, Divider, Text, Title } from "react-native-paper";

import { Box } from "../../components/Spacing";

const agribusinessInputs = [
  {
    id: "1",
    title: "Seeds",
    image: "https://example.com/seeds.jpg",
  },
  {
    id: "2",
    title: "Fertilizers",
    image: "https://example.com/fertilizers.jpg",
  },
  {
    id: "3",
    title: "Pesticides",
    image: "https://example.com/pesticides.jpg",
  },
  // Add more agribusiness input items as needed
];

const Inputs: FC = () => /* const renderItem = ({ item }) => (*/ /*   <Card style={styles.card}>*/ /*     <Card.Cover source={{ uri: item.image }} />*/ /*     <Card.Content>*/ /*       <Title>{item.title}</Title>*/ /*     </Card.Content>*/ /*   </Card>*/ /* );*/(
  // <FlatList
  //   data={agribusinessInputs}
  //   renderItem={renderItem}
  //   keyExtractor={(item) => item.id}
  //   contentContainerStyle={styles.listContainer}
  // />
  <View
    styles={{
      flex: 1,
    }}
  >
    <Box
      ml={20}
      mt={20}
    >
      <Title>Sugeridos para voce</Title>
      <Box
        mt={10}
        mb={10}
      >
        <Divider />
      </Box>

    </Box>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Box
        alignItems="center"
        justifyContent="center"
        borderRadius={10}
        borderWidth={1}
        width={120}
        height={170}
        padding={10}
      >
        <Image
          source={require("../../assets/img/3.webp")}
          style={{ width: 100, height: 100 }}
        />
        <Text>
          100l Nitrato {'\n'} de Potassio
          {'\n'} Fracionado
        </Text>
      </Box>

      <Box
        alignItems="center"
        justifyContent="center"
        borderRadius={10}
        borderWidth={1}
        width={120}
        height={170}
        padding={10}
      >
        <Image
          source={require("../../assets/img/3.webp")}
          style={{ width: 100, height: 100 }}
        />
        <Text>
          100l Nitrato {'\n'} de Potassio
          {'\n'} Fracionado
        </Text>
      </Box>

      <Box
        alignItems="center"
        justifyContent="center"
        borderRadius={10}
        borderWidth={1}
        width={120}
        height={170}
        padding={10}
      >
        <Image
          source={require("../../assets/img/3.webp")}
          style={{ width: 100, height: 100 }}
        />
        <Text>
          100l Nitrato {'\n'} de Potassio
          {'\n'} Fracionado
        </Text>
      </Box>


    </ScrollView>
    <Box
      mt={10}
      mb={10}
    >
      <Divider />
    </Box>

  </View>

);

export default Inputs;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
});
