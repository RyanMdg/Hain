import ModalComp from "@/components/modalComponents";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Modal, Pressable, Text, View } from "react-native";

type props = {
  status: boolean;
  onpress: () => void;
};
export default function ModalScreen({ status, onpress }: props) {
  return (
    <Modal animationType="slide" transparent={true} visible={status}>
      <Pressable
        onPress={onpress}
        className="flex-1 justify-center items-center bg-black/50"
      >
        <Pressable
          onPress={(e) => e.stopPropagation}
          className="w-72 rounded-xl overflow-hidden"
        >
          <LinearGradient
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            colors={["#34D399", "#F9FAFB"]}
            className="p-6 items-center"
          >
            <View>
              <Text className=" font-semibold">Smart Assistant</Text>
              <Pressable className=" flex-row " onPress={onpress}>
                <Ionicons
                  size={22}
                  className=" absolute top-[-2rem] p-1 left-[10.5rem] "
                  name="chevron-down-outline"
                />
              </Pressable>
            </View>

            <ModalComp />
          </LinearGradient>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
