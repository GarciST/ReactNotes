import * as React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export const CreateAccountComponent = () => {
    return(
        <View>
            <Input 
                placeholder="Username"
                leftIcon={{type: "material", name: "person"}} />
            <Input 
                placeholder="Email"
                leftIcon={{type: "material", name: "email"}} />
            <Input
                placeholder="Password"
                leftIcon={{type: "material", name: "lock"}} />
            <Input
                placeholder="Confim password"
                leftIcon={{type: "material", name: "lock"}} />
            <Input
                placeholder="Name" />
            <Input
                placeholder="Last name" />
            <Button
                title="Sing up" />
        </View>
    )
}