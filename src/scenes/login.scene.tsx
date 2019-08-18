import * as React from 'react';
import { LoginContainer } from '../pods/login/login.container';
import { SessionProvider, SessionContext, userLogin, UserContextProps } from '../core';

interface Props extends UserContextProps {
    componentId: string;
}

export const LoginScene = (props: Props) => {


    return (
        <SessionProvider>
            <LoginContainer {...props} />
        </SessionProvider>
    )
}
