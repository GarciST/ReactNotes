import { Options } from "react-native-navigation";
import themeStyle from "../styles/theme.style";

export const defaultLayout: Options = {
    topBar: {
      background: {
        color: themeStyle.PRIMARY_COLOR
      },
      title: {
        color: 'white',
      },
      backButton: {
        title: '', 
        color: 'white'
      },
    },
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: themeStyle.BACKGROUND_COLOR
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
      textColor: 'gray',
      selectedTextColor: 'black',
      iconColor: 'gray',
      selectedIconColor: 'black',
    }
  }