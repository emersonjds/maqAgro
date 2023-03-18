import React, { FC } from "react";
import { View } from "react-native";

import { LineChart } from 'react-native-chart-kit';
import { Box } from "../../components/Spacing";
import { Title } from "../../components/Texts";

const Cotations: FC = () => {

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <Box
        ml={20}
        mt={20}
        mb={20}
      >
        <Title>
          Cotação Semanal - Saca de Soja 03/2023
        </Title>
      </Box>

      <LineChart
        data={data}
        width={400}
        height={200}
        chartConfig={chartConfig}
      />


    </View>
  )

};

export default Cotations;
