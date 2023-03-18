export type Category = {
    id: number;
    name: string;
    image: any ;
}

export const categoriesData: Category[] = [
    {
      id: 1,
      name: "Veiculos",
      image: require("../../assets/img/1.jpeg"),
    },
    {
      id: 2,
      name: "Insumos",
      image: require("../../assets/img/2.jpeg"),
    },
    {
      id: 3,
      name: "Rações",
      image: require("../../assets/img/3.jpeg"),
    },
  ];