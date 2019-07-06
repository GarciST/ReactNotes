import * as React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

export const CreateAccountComponent = () => {
    return(
        <View>
            <Input 
                placeholder="Email" />
            <Input
                placeholder="Password" />
            <Input
                placeholder="Confim password" />
            <Input
                placeholder="Name" />
            <Input
                placeholder="Last name" />
            <Button
                title="Sing up" />
        </View>
    )
}