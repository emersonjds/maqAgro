import React, { FC } from "react";
import { ScrollView, View } from "react-native";

import { LineChart } from "react-native-chart-kit";
import { Box } from "../../components/Spacing";
import { Title } from "../../components/Texts";
import { Divider } from "react-native-paper";

const Cotations: FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [70, 85, 75, 90, 95, 80],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [60, 75, 80, 70, 85, 90],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [50, 60, 75, 65, 80, 70],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [70, 33, 44, 53, 89, 80],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [60, 22, 55, 55, 85, 90],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [50, 33, 45, 33, 80, 33],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const data3 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [70, 44, 44, 53, 89, 80],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [60, 22, 65, 65, 85, 90],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [50, 33, 48, 48, 80, 33],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Box ml={20} mt={20} mb={20}>
          <Title>Cotação Mensal - Saca de Soja - 2023</Title>
        </Box>

        <LineChart
          data={data}
          width={400}
          height={200}
          chartConfig={chartConfig}
        />

        <Divider />

        <Box ml={20} mt={20} mb={20}>
          <Title>Cotação Mensal - Saca de Milho - 2023</Title>
        </Box>
        <LineChart
          data={data2}
          width={400}
          height={200}
          chartConfig={chartConfig}
        />

        <Divider />

        <Box ml={20} mt={20} mb={20}>
          <Title>Cotação Mensal - Saca de Algodao - 2023</Title>
        </Box>
        <LineChart
          data={data3}
          width={400}
          height={200}
          chartConfig={chartConfig}
        />
      </ScrollView>
    </View>
  );
};

export default Cotations;
