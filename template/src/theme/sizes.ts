import { Dimensions, StatusBar } from "react-native";
import { RFPercentage as RF } from "react-native-responsive-fontsize";

import { FontSizeTheme } from "../@types/theme/sizes";

const { width, height } = Dimensions.get("window");
const SBsize = StatusBar.currentHeight;

const screen = {
  width,
  height,
  SBsize,
};

const fontsize: FontSizeTheme = {
  xs: RF(1),
  sm: RF(2.4),
  md: RF(3.8),
  lg: RF(4.2),
};

const padding = {
  sm: RF(1),
  md: RF(2),
  lg: RF(2.5),
};

export { screen, fontsize, padding };
