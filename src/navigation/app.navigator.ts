import { registerAppComponents } from "./registerAppComponents";
import { Navigation } from "react-native-navigation";
import { defaultLayout } from "../layout";
import { MainScene } from '../scenes';
import { LoginScene } from '../scenes/login.scene';
import { CreateAccountScene } from '../scenes/create-account.scene';


registerAppComponents([
  //Here the registered scenes
  MainScene,
  LoginScene,
  CreateAccountScene
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