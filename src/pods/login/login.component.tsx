import * as React from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'

interface Props {
    openCreateAcount?: () => void,
    signIn?: () => void,
}

const theme = StyleSheet.create({
    signupButton: {
        minWidth: 150
    },
    formItems: {
        marginBottom: 20
    },
    createAccount: {
        padding: 30,
        textDecorationLine: 'underline'
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
    }
});

const onNextField = (input: React.RefObject<Input>):void => {
    if(input && input.current) input.current.focus()
}


export const LoginComponent = (props: Props) => {

    const passwordInput = React.useRef<Input>(null);

    return (
        <View style={theme.container}>
            <Icon
                name='book'
                type='material'
                size={100}
                color="#80deea"
            />
            <Input
                containerStyle={theme.formItems}
                textContentType="username"
                placeholder="Username"
                returnKeyType="next"
                onSubmitEditing={_ => onNextField(passwordInput)}
                leftIcon={
                    {
                        name: 'person',
                        type: 'material',
                        size: 24,
                        color: 'black',
                    }
                } />
            <Input
                containerStyle={theme.formItems}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password"
                ref={passwordInput}
                leftIcon={
                    {
                        name: 'lock',
                        type: 'material',
                        size: 24,
                        color: 'black',
                    }
                } />
            <Button
                containerStyle={theme.signupButton}
                title="Sign in"
                onPress={props.signIn} />
            <Text
                style={theme.createAccount}
                onPress={props.openCreateAcount}
            >Create an account</Text>
        </View>
    );
}