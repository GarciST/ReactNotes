import { Layout } from "react-native-navigation";
import { CreateAccountScene } from '../scenes';
import { createAccountOptions } from "./options";

export const createAccountLayout: Layout = {
    component: {
        id: CreateAccountScene.name,
        name: CreateAccountScene.name,
        options: {...createAccountOptions}
    }
}