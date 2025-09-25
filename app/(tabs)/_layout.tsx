import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import ModalScreen from "../modal";
import Fridge from "./fridge";
import Index from "./index";
import MealPlanner from "./mealPlannerTab";

type RenderCircleProps = {
  selectedTab: string; // or number, depends on your tab key type
  navigate: (tab: string) => void;
  routeName: string;
};

export default function App() {
  const [type, setType] = useState<string>("DOWN");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleModal = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <CurvedBottomBar.Navigator
      type={type}
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      height={70}
      circleWidth={55}
      bgColor="#01A464"
      initialRouteName="Home"
      renderCircle={({ selectedTab, navigate }: RenderCircleProps) => (
        <>
          <ModalScreen status={isVisible} onpress={handleModal} />

          <View style={styles.btnCircle}>
            <Pressable onPress={handleModal}>
              <Image
                source={require("@/assets/images/ai.png")}
                className=" w-9"
              />
            </Pressable>
          </View>
        </>
      )}
      tabBar={({ routeName, selectedTab, navigate }: RenderCircleProps) => {
        let icon: any;

        switch (routeName) {
          case "Home":
            icon = require("../../assets/images/newspaper 1.png");
            break;
          case "fridge":
            icon = require("../../assets/images/fridge 1.png");
            break;
          case "mealPlan":
            icon = require("../../assets/images/planner 1.png");
            break;

          case "Profile":
            icon = require("../../assets/images/user 6.png");
            break;
        }
        return (
          <TouchableOpacity
            onPress={() => navigate(routeName)}
            className="flex-1 items-center justify-center"
          >
            <Image
              source={icon}
              style={{
                width: 27,
                height: 27,
                tintColor: routeName === selectedTab ? "white" : "lightgray",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      }}
    >
      <CurvedBottomBar.Screen
        name="Home"
        options={{ headerShown: false }}
        position="LEFT"
        component={() => <Index />}
      />
      <CurvedBottomBar.Screen
        name="fridge"
        options={{ headerShown: false }}
        position="LEFT"
        component={() => <Fridge />}
      />
      <CurvedBottomBar.Screen
        name="mealPlan"
        options={{ headerShown: false }}
        position="RIGHT"
        component={<MealPlanner />}
      />
      <CurvedBottomBar.Screen
        name="Profile"
        options={{ headerShown: false }}
        position="RIGHT"
        component={() => <Text>Profile Screen</Text>}
      />
    </CurvedBottomBar.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  btnCircle: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#01A464",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
});
