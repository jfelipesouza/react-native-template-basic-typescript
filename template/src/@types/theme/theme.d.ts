import 'styled-components'
import { DARK_THEME, LIGHT_THEME } from '../../theme'

type LightTheme = typeof LIGHT_THEME
type NightTheme = typeof DARK_THEME

declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
  export interface DarkTheme extends NightTheme {}
}
