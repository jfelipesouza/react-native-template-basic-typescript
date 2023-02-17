import { Dimensions, StatusBar } from 'react-native'
import { RFPercentage as Percet } from 'react-native-responsive-fontsize'

const statusbarHeight = StatusBar.currentHeight
const { height, width } = Dimensions.get('window')

export const icons = {
  xs: Percet(1),
  sm: Percet(2),
  md: Percet(4.5),
  lg: Percet(6)
}

export const fontSize = {
  title: Percet(4),
  text: Percet(2.3),
  input: Percet(2.5),
  headerTitle: Percet(3),
  fieldTitle: Percet(2.7)
}

export const space = {
  xsm: Percet(1),
  sm: Percet(1.25),
  md: Percet(1.75),
  lg: Percet(2.5),
  xlg: Percet(3.5)
}

export const dimensions = {
  width,
  height,
  statusbarHeight
}

export const fonts = {
  inter: {
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
    regular: 'Inter-Regular',
    semi: 'Inter-SemiBold'
  }
}

export { darkColors, lightColors } from './colors'
