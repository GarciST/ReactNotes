import * as React from 'react';
import { LoginContainer } from '../pods/login';
import { Navigation } from 'react-native-navigation';
import { loginLayout } from '../layout';


interface Props {
    componentId: string
}

export const MainScene = (props: Props) => {

    React.useEffect(() => {
        //not login yet
        Navigation.setStackRoot(
            props.componentId,
            loginLayout
        );
    });

    return (
        <LoginContainer {...props} />
    )
}