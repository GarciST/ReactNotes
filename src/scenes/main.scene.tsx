import * as React from 'react';
import { LoginContainer } from '../pods/login';
import { Navigation } from 'react-native-navigation';
import { loginLayout } from '../layout';
import { LoginScene } from './login.scene';


interface Props{
    componentId: string
}

export const MainScene = (props: Props) => {

    React.useEffect(() => {
        //not login yet
        Navigation.setStackRoot(
            props.componentId,
            {
                component: {
                    id: LoginScene.name,
                    name: LoginScene.name,
                    options: loginLayout
                }
            }
        );
    });

    return (
            <LoginContainer />
    )
}