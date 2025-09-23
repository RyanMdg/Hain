import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Index from "./index";

export default function App() {
  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      height={80}
      circleWidth={55}
      bgColor="#01A464"
      initialRouteName="Home"
      renderCircle={({ selectedTab, navigate }) => (
        <View style={styles.btnCircle}>
          <Image source={require("@/assets/images/ai.png")} className=" w-9" />
        </View>
      )}
      tabBar={({ routeName, selectedTab, navigate }) => {
        let icon: any;
        // if (routeName === "Home") icon = "document-text-outline";
        // else if (routeName === "fridge") icon = "bus-outline";
        // else if (routeName === "mealPlan") icon = "calendar-outline";
        // else if (routeName === "Profile") icon = "person-outline";

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
                width: 25,
                height: 25,
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
        position="LEFT"
        options={{ headerShown: false }}
        component={() => <Index />}
      />
      <CurvedBottomBar.Screen
        name="fridge"
        position="LEFT"
        component={() => <Text>Trips Screen</Text>}
      />
      <CurvedBottomBar.Screen
        name="mealPlan"
        position="RIGHT"
        component={() => <Text>Schedule Screen</Text>}
      />
      <CurvedBottomBar.Screen
        name="Profile"
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
