import * as React from 'react';
import { View, Text, TextInput, Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import Parse from 'parse/react-native'
import { LoginContainer } from '../pods/login';

export const MainScene = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const logIn = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {

        

        Parse.User.logIn(username, password).then((user) => {
            // Do stuff after successful login
            console.log('Logged in user', user);
        }).catch(error => {
            console.error('Error while logging in user', error);
        })
    }


    return (
        <View>
            <LoginContainer />
        </View>
    )
}