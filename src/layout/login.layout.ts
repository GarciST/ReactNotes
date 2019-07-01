import { Options } from "react-native-navigation";
import themeStyle from "../styles/theme.style";

export const loginLayout: Options = {
    topBar: { //removeTopBar
        visible: false,
        drawBehind: true,
        animate: false,
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: themeStyle.BACKGROUND_COLOR
    }
}