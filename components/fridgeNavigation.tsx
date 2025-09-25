import { ReactNode } from "react";
import { View } from "react-native";

type props = {
  children: ReactNode;
  isOnActive: string;
};

export default function FridgeNav({ children, isOnActive }: props) {
  return (
    <>
      <View className=" flex-row rounded-full mt-5 bg-[#A2B6B0]">
        {children}
      </View>
    </>
  );
}
