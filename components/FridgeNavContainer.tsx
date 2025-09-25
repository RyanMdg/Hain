import MealsScreen from "@/screens/fridgeTab/MealsScreen";
import MyPantry from "@/screens/fridgeTab/MyPantryScreen";
import ShopListScreen from "@/screens/fridgeTab/shopListScreen";
import { View } from "react-native";

type props = {
  activeScreen: string;
};

const FridgeNavContainer = ({ activeScreen }: props) => {
  return (
    <View>
      {activeScreen === "My Pantry" ? <MyPantry /> : null}
      {activeScreen === "Meals" ? <MealsScreen /> : null}
      {activeScreen === "Shop List" ? <ShopListScreen /> : null}
    </View>
  );
};

export default FridgeNavContainer;
