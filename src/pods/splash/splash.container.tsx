import * as React from 'react';
import { View, Text } from 'react-native';
import { SessionContext, userLogin, UserContextProps, userCurrent } from '../../core/session.context';
import { Navigation } from 'react-native-navigation';
import { LoginScene } from '../../scenes';
import { loginOptions } from '../../layout/options';

interface Props extends UserContextProps {
    componentId: string
}

export const SplashContainer = (props: Props) => {

    

    return (
        <View>
            <Text>{SplashContainer.name}</Text>
        </View>
    )
}