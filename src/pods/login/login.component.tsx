import * as React from 'react';
import { View, TextInput, Button } from 'react-native';

interface Props {

}

export const LoginComponent = (props: Props) => {
    return (
        <View>
            <View>
        
            </View>
            <View>
                <TextInput 
                textContentType="username"
                placeholder="Username" />
                <TextInput 
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password" />
                <Button title="Sign in" onPress={_ => {}}/>
            </View>
        </View>
    );
}