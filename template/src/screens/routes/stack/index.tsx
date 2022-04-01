import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../home";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
    </Navigator>
  );
};

export default StackRoutes;
