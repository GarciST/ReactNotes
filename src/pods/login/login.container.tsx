import * as React from 'react';
import { LoginComponent } from './';
import { Navigation } from 'react-native-navigation';
import { CreateAccountScene } from '../../scenes/create-account.scene';
import { defaultLayout } from '../../layout/default.layout';

interface Props {
    componentId: string;
}



export const LoginContainer = (props: Props) => {


    const openCreateAccount = () => {
        Navigation.push(props.componentId, {
            component: {
                id: CreateAccountScene.name,
                name: CreateAccountScene.name,
                options: defaultLayout
            }
        });
    }

    return (<LoginComponent openCreateAcount={openCreateAccount}></LoginComponent>)
}