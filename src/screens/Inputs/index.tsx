import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Title } from "react-native-paper";

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

const Inputs: React.FC = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.title}</Title>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={agribusinessInputs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

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
