import * as React from 'react';
import { LoginComponent } from './';
import { Navigation } from 'react-native-navigation';
import { createAccountLayout } from '../../layout'
import { SessionContext } from '../../core';

interface Props {
    componentId: string;
    username?: any;
}



export const LoginContainer = (props: Props) => {


    const openCreateAccount = () => {
        Navigation.push(props.componentId, {
            ...createAccountLayout
        });
    }

    return (<LoginComponent openCreateAcount={openCreateAccount}></LoginComponent>)
}