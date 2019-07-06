import { Layout } from "react-native-navigation";
import { LoginScene } from "../scenes/login.scene";
import { loginOptions } from "./options/login.options";

export const loginLayout: Layout = {
  component: {
    id: LoginScene.name,
    name: LoginScene.name,
    options: {...loginOptions}
  }
}