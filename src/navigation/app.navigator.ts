import { registerAppComponents } from "./registerAppComponents";
import { Navigation } from "react-native-navigation";
import { defaultOptions } from "../layout";
import { MainScene } from '../scenes';
import { LoginScene } from '../scenes/login.scene';
import { CreateAccountScene } from '../scenes/create-account.scene';
import { SplashScene } from '../scenes/splash.scene';
import { splashOptions } from "../layout/options";


registerAppComponents([
  //Here the registered scenes
  SplashScene,
  MainScene,
  LoginScene,
  CreateAccountScene
])

export const pushInit = () => {
    Navigation.setDefaultOptions(defaultOptions);

      Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: SplashScene.name,
                options: { ...splashOptions }
              }
            }]
          }
        }
      })
}