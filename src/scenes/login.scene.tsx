import * as React from 'react';
import { LoginContainer } from '../pods/login/login.container';
import { SessionProvider } from '../core';

interface Props {
    componentId: string;
}

export const LoginScene = (props: Props) => {
    return (
            <LoginContainer {...props} />
    )
}
