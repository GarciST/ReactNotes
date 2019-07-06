import * as React from 'react';
import { LoginComponent } from './';
import { Navigation } from 'react-native-navigation';
import { createAccountLayout } from '../../layout'

interface Props {
    componentId: string;
}



export const LoginContainer = (props: Props) => {


    const openCreateAccount = () => {
        Navigation.push(props.componentId, {
            ...createAccountLayout
        });
    }

    return (<LoginComponent openCreateAcount={openCreateAccount}></LoginComponent>)
}