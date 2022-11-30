import { ReactElement } from "react";
import { useShoppingBag } from "../Context/ShoppingBagContext";
import { Results } from "../Components/Results/Results";
// import { MensClothes } from "../Data/items";

export const Mens: React.FC = (): ReactElement => {
  const { data } = useShoppingBag();

  //Array filter for MEN'S clothing
  const MensData = data.filter((item) => item.category === "men's clothing");
  console.log("MensData:", MensData);

  return (
    <>
      <Results GenderData={MensData} Gender={"Men's"} />
    </>
  );
};
