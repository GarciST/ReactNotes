import * as React from 'react';
import { View } from 'react-native';
import { Button, Input, Text, ThemeProvider } from 'react-native-elements';
import { Icon } from 'react-native-elements'

interface Props {

}

const theme = {
    Input: {
        maxWidth: 100
    }
}

export const LoginComponent = (props: Props) => {
    return (
        <View>
            <View>

            </View>
            <View>
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
                <Text
                    
                >Create an account</Text>
            </View>
        </View>
    );
}