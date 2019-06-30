import { registerAppComponents } from "./registerAppComponents";
import { Navigation } from "react-native-navigation";
import { defaultLayout } from "../layout";
import { MainScene } from '../scenes';
import { LoginScene } from '../scenes/login.scene';


registerAppComponents([
  //Here the scenes
  MainScene,
  LoginScene
])

export const pushInit = () => {
    Navigation.setDefaultOptions(defaultLayout)

      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: MainScene.name,
                options: {
                  topBar: {
                    visible: true,
                    title: {
                      text: "Home Screen"
                    }
                  },
                  statusBar: {
                    style: 'dark'
                  }
                }
              }
            }]
          }
        }
      })
}