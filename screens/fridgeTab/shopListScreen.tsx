import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

const ShopListScreen = () => {
  return (
    <View>
      <Text className=" text-2xl font-medium font-ubuntu">My Cart</Text>
      <View className="  mt-5  gap-5">
        <TextInput
          className=" bg-white  rounded-xl"
          keyboardType="web-search"
        />
        <Ionicons name="add-circle" size={32} color="black" />
      </View>
    </View>
  );
};

export default ShopListScreen;
