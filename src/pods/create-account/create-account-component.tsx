import * as React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

export const CreateAccountComponent = () => {
    return(
        <View>
            <Input 
                placeholder="Email" />
        </View>
    )
}