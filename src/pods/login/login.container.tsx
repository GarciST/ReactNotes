import * as React from 'react';
import { LoginComponent } from './';
import { Navigation } from 'react-native-navigation';
import { createAccountLayout } from '../../layout'
import { userLogin, UserContextProps, SessionContext } from '../../core';
import * as Parse from 'parse/react-native';

interface Props extends UserContextProps {
    componentId: string;
}



export const LoginContainer = (props: Props) => {

    const MyContext = React.useContext(SessionContext);

    const openCreateAccount = () => {
        Navigation.push(props.componentId, {
            ...createAccountLayout
        });
    }

    const signIn = () => userLogin({ email: "usuario.prueba@yopmail.com", password: "usuario" }).then(user => {
        if(MyContext.updateUser)
            MyContext.updateUser({ ...user });
    }).catch((msg) => {
        console.log(`url is ${Parse.serverURL}`);
        throw msg;
    })

    

    return (<LoginComponent openCreateAcount={openCreateAccount} signIn={signIn}></LoginComponent>)
}