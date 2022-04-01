import 'styled-components';
import { light } from '../theme';

export type LightTheme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends LightTheme {}
}