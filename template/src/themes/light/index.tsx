import { RFPercentage as Percet } from 'react-native-responsive-fontsize'
import { StatusBar, Dimensions } from 'react-native'

const statusbarHeight = StatusBar.currentHeight
const { height, width } = Dimensions.get('window')

export const light = {
  colors: {
    primary: '#5f0bdd',
    secundary: '#331e77',
    text: '#222',
    background: '#fafafa'
  },
  fontSize: {
    title: Percet(4),
    text: Percet(2.3)
  },
  space: {
    sm: Percet(1)
  },
  scrennDimensions: {
    width,
    height,
    statusbarHeight
  }
}
