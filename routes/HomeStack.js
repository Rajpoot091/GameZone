import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../components/Home";
import Review from "../components/Review";

const screens = {
  GameZone: {
    screen: Home,
    navigatioOptions: {
      title: "GameZone",
    },
  },
  ReviewDetails: {
    screen: Review,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#eee",
    headerStyle: { backgroundColor: "coral", height: 60 },
  },
});

export default HomeStack;
