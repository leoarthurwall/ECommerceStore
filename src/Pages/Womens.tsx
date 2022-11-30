import { ReactElement } from "react";
import { useShoppingBag } from "../Context/ShoppingBagContext";
import { Results } from "../Components/Results/Results";
// import { WomensClothes } from "../Data/items";




export const Womens: React.FC  = (): ReactElement => {
  const { data } = useShoppingBag();
  

  //Array filter for WOMEN'S clothing
  const WomensData = data.filter(
    (item) => item.category === "women's clothing"
  );
  console.log("WomensData:", WomensData);

  return (
    <>
      <Results GenderData={WomensData} Gender={"Women's"}/>
    </>
  );
};
