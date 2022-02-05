import { createStackNavigator } from "react-navigation-stack";
import About from "../components/About";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About GameZone",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#eee",
    headerStyle: { backgroundColor: "coral" },
  },
});

export default AboutStack;
