import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModalComp = () => {
  return (
    <SafeAreaView className=" flex-row gap-5 my-5">
      <View>
        <Text className=" text-[#717171] font-medium">Scan Item</Text>
        <Pressable className=" bg-white items-center mt-3 rounded-md border border-[#717473]">
          <Image
            className=" w-8 h-8 py-[2rem]"
            resizeMode="contain"
            source={require("@/assets/images/apple 2.png")}
          />
          <Image
            className=" w-[3.3rem] h-[3.3rem] top-[0.3rem] absolute"
            resizeMode="contain"
            source={require("@/assets/images/scanning.png")}
          />
        </Pressable>
      </View>
      <View>
        <Text className=" text-[#717171] font-medium">Start a Chat</Text>
        <Pressable className=" bg-white items-center mt-3 rounded-md border border-[#717473]">
          <Image
            className=" w-8 h-8 py-[2rem]"
            resizeMode="contain"
            source={require("@/assets/images/chat.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ModalComp;
