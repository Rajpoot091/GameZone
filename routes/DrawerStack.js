import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import About from "../components/About";

// const screens = {
//   Home: {
//     screen: HomeStack,
//   },
//   About: {
//     screen: AboutStack,
//   },
// };

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
