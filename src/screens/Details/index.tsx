import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Box } from "../../components/Spacing";
import { Subtitle, Title } from "../../components/Texts";
import { Divider } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { Button } from "react-native-paper";

import Colors from "../../components/Constants";

const Details: React.FC = () => {
  const obj = {
    id: 1,
    name: "Fertilizante NPK 10-10-10",
    description: "Soybeans description",
    images: [
      require("../../assets/img/fert1.png"),
      require("../../assets/img/fert2.png"),
      require("../../assets/img/fert3.png"),
    ],
    price: 150.5,
    fraction: "100 kg",
  };

  const { images } = obj;

  const [checked, setChecked] = React.useState(false);

  const navigation = useNavigation();

  const goToFinish = () => {
    navigation.navigate("Finish");
  };

  return (
    <Box height="100%">
      <Box width="100%" height="40%">
        <SliderBox images={images} sliderBoxHeight={300} />
      </Box>
      <Box mt={10} p={10}>
        <Title>{obj.name}</Title>
        <Title>Descrição</Title>
        <Subtitle>{obj.description}</Subtitle>
        <Title>Preço</Title>
        <Subtitle>R$ {obj.price}</Subtitle>
        <Title>Fração</Title>
        <Subtitle>{obj.fraction}</Subtitle>
      </Box>
      <Divider />

      <Box mt={10} p={10}>
        <Title>Adicionar Parceiro Logistico Sicoob ?! </Title>
        <Box flexDirection="row" alignItems="center">
          <Box
            width="10%"
            backgroundColor="lightgray"
            mt={10}
            borderRadius={10}
          >
            <Checkbox
              style={{ marginTop: 10 }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </Box>

          <Box width="80%">
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              Adicionar{" "}
            </Text>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box mt={30} p={10}>
        <Button
          onPress={() => {
            goToFinish();
          }}
          mode="contained"
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${Colors.green}`,
          }}
        >
          Finalizar Pedido
        </Button>
      </Box>
    </Box>
  );
};

export default Details;
