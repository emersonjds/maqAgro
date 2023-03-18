import React from "react";
import { Box } from "../../components/Spacing";
import { Subtitle, Title } from "../../components/Texts";
import { Button, Divider } from "react-native-paper";
import Colors from "../../components/Constants";
import { useNavigation } from "@react-navigation/native";

const Finish: React.FC = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

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

  return (
    <Box p={20}>
      <Title>Tudo certo, seu pedido foi realizado</Title>
      <Box mt={10} mb={10}>
        <Divider />
      </Box>

      <Title>Detalhes do Pedido</Title>
      <Box mb={10} mt={10}>
        <Title>Produto </Title>
        <Subtitle>{obj.name}</Subtitle>
      </Box>
      <Box mb={10} mt={10}>
        <Title>Preço</Title>
        <Subtitle>R$ {obj.price}</Subtitle>
      </Box>

      <Box mb={10} mt={10}>
        <Title>Fração</Title>
        <Subtitle>{obj.fraction}</Subtitle>
      </Box>

      <Title>
        Agora é só aguardar, um operador logistico parceiro, ira até o local de
        retirada e voce pode acompanhar pelo aplicativo o andamento do seu
        pedido.
      </Title>

      <Box mt={10}>
        <Divider />
      </Box>
      <Box mt={50}>
        <Button
          onPress={() => {
            goToHome();
          }}
          mode="contained"
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${Colors.green}`,
          }}
        >
          Voltar para Home
        </Button>
      </Box>
    </Box>
  );
};

export default Finish;
