import FridgeNavContainer from "@/components/FridgeNavContainer";
import FridgeNav from "@/components/fridgeNavigation";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Fridge() {
  const [currentScreen, setCurrentScreen] = useState<string>("My Pantry");
  const pathNames = ["My Pantry", "Meals", "Shop List"];
  const handleClick = (nav: string) => {
    setCurrentScreen(nav);
  };

  return (
    <SafeAreaView className="bg-[#EEF8F5] h-screen">
      <View className=" justify-center items-center ">
        <FridgeNav isOnActive={currentScreen}>
          {pathNames.map((item, index) => (
            <Pressable key={index} onPress={() => handleClick(item)}>
              <Text
                className={`${
                  currentScreen === item ? "bg-[#01A464]" : null
                } text-white px-5  py-3 rounded-full font-semibold text-[1.2rem]`}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </FridgeNav>
      </View>
      <FridgeNavContainer activeScreen={currentScreen} />
    </SafeAreaView>
  );
}
