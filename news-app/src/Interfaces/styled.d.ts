// #region Global Imports
import "styled-components";
// #endregion Global Imports

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            text: string;
            secondary: string;
            dark: string;
            white: string;
        };
    }
}
