import "styled-components";

import { theme } from "../shared/styles/themes";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
