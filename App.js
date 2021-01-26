import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";

import store from "./src/store";
import { setNavigator } from "./src/utils/navigationRef";
import AccountScreen from "./src/screens/authScreens/AccountScreen";
import ScreenOne from "./src/screens/ScreenOne";
import SigninScreen from "./src/screens/authScreens/SigninScreen";
import SignupScreen from "./src/screens/authScreens/SignupScreen";
import ResolveAuthScreen from "./src/screens/authScreens/ResolveAuthScreen";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    One: ScreenOne,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
