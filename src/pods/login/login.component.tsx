import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements'

interface Props {

}

const theme = StyleSheet.create({
    signupButton: {
        alignSelf: "center",
        minWidth: 120
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});


export const LoginComponent = (props: Props) => {
    return (
        <View style={theme.container}>
            <Input
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
                title="Sign in"
                onPress={_ => { }} />
            <Text>Create an account</Text>
        </View>
    );
}