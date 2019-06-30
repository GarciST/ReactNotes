import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'

interface Props {

}

const theme = StyleSheet.create({
    signupButton: {
        minWidth: 150
    },
    formItems: {
        marginBottom: 20
    },
    createAccount: {
        marginTop: 30
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


export const LoginComponent = (props: Props) => {
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
                leftIcon={
                    <Icon
                        name='person'
                        type='material'
                        size={24}
                        color='black'
                    />
                } />
            <Input
                containerStyle={theme.formItems}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password"
                leftIcon={
                    <Icon
                        name='lock'
                        type='material'
                        size={24}
                        color='black'
                    />
                } />
            <Button
                containerStyle={theme.signupButton}
                title="Sign in"
                onPress={_ => { }} />
            <Text
                style={theme.createAccount}
            >Create an account</Text>
        </View>
    );
}