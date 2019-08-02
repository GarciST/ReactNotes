import * as React from 'react';
import { View, Text } from 'react-native';
import { SessionContext, userLogin } from '../../core/session.context';

interface Props {
    componentId: string
}

export const SplashContainer = (props: Props) => {

    const context = React.useContext(SessionContext)
    

    return(
        <View>
            <Text>${SplashContainer.name}</Text>
        </View>
    )
}